'use server';

import { projects } from '../constants';
import { Repo } from '../types';

export const getGithubRepos = async () => {
  try {
    const repoNamesFromUIProjects = projects.map((project) => project.githubLink.split('/').pop())
    const repoNames = await getThisYearsPublicRepoNames();
    const filteredRepoNames = repoNames.filter((name: string) => repoNamesFromUIProjects.includes(name))


    const repoPRs =
      filteredRepoNames &&
      (await Promise.all(
        filteredRepoNames.map(async (repoName: string) => {
          const repoPRs = await getRepoPRs(repoName, 2);
          return repoPRs;
        })
      )).flat();

    const repoCommits =
      filteredRepoNames &&
      (await Promise.all(
        filteredRepoNames.map(async (repoName: string) => {
          const repoCommits = await getRepoCommits(repoName, 2);
          return repoCommits;
        })
      ));
    return {
      error: null,
      repoPRs,
      repoCommits: repoCommits[0],
    };
  } catch (error) {
    console.error('Error fetching images from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching repos' };
  }
};

const getThisYearsPublicRepoNames = async () => {
  const response = await fetch(
    'https://api.github.com/users/DDVVPP/repos?visibility=public'
  );
  const data = await response.json();
  const reposUpdatedThisYear = data.filter((repo: Repo) => {
    const updatedAtYear = repo.updated_at.split('-')[0];
    return updatedAtYear === '2025';
  });
  const repoNames = reposUpdatedThisYear
    .filter(
      (repo: Repo) => !['DDVVPP', 'HackForLA-Website'].includes(repo.name)
    )
    .map((repo: Repo) => {
      return repo.name;
    });

  return repoNames;
};

const getRepoPRs = async (repoName: string, numberOfRepos: number) => {
  const response = await fetch(
    `https://api.github.com/repos/DDVVPP/${repoName}/pulls?state=all`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  const repoPRsUpdatedThisYear = data.filter((repo: Repo) => {
    const updatedAtYear = repo.updated_at.split('-')[0];
    return updatedAtYear === '2025';
  }).sort((a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());;

  const filteredData = repoPRsUpdatedThisYear.slice(0, 2).map((repo: Repo) => {
    return {
      repoName,
      url: repo.url,
      title: repo.title,
      body: repo.body,
    };
  });

  return filteredData.length > 0 && filteredData;
};

const getRepoCommits = async (repoName: string, numberOfCommits: number) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/DDVVPP/${repoName}/commits`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const repoPRsUpdatedThisYear = data.filter((repo: Repo) => {
      const updatedAtYear = repo.commit.author.date.split('-')[0];
      return updatedAtYear === '2025';
    });

    const filteredData = repoPRsUpdatedThisYear.map((repo: Repo) => {
      return {
        repoName,
        date: repo.commit.author.date,
        message: repo.commit.message,
        url: repo.html_url,
      };
    });

    return filteredData;
  } catch (error) {
    console.error('Error fetching commits from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching commits' };
  }
};
