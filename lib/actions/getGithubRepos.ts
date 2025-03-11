'use server';

import { projects } from '../constants';
import { Repo } from '../types';

export const getGithubRepos = async () => {
  try {
    const repoNamesFromUIProjects = projects.map((project) =>
      project.githubLink.split('/').pop()
    );
    const repoNames = await getThisYearsPublicRepoNames();
    const filteredRepoNames = repoNames.filter((name: string) =>
      repoNamesFromUIProjects.includes(name)
    );

    const repoPRs = (
      await Promise.all(
        filteredRepoNames.map(async (repoName: string) => {
          const repoPRs = await getRepoPRs(repoName, 2);
          return repoPRs;
        })
      )
    ).flat();

    const repoCommits = await Promise.all(
      filteredRepoNames.map(async (repoName: string) => {
        const repoCommits = await getRepoCommits(repoName, 2);
        return repoCommits;
      })
    );
    return {
      error: null,
      repoPRs,
      repoCommits,
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

const getRepoPRs = async (repoName: string, numberOfPRs: number) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/DDVVPP/${repoName}/pulls?state=all`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Find repos that are updated this year and sort them by most recent
    const repoPRsUpdatedThisYear = data
      .filter((repo: Repo) => {
        const updatedAtYear = repo.updated_at.split('-')[0];
        return updatedAtYear === '2025';
      })
      .sort((a: Repo, b: Repo) => b.updated_at.localeCompare(a.updated_at));

    // Return the n most recent repos with the specified object properties
    const filteredData = repoPRsUpdatedThisYear
      .slice(0, numberOfPRs)
      .map((repo: Repo) => {
        return {
          repoName,
          state: repo.state,
          mergedAt: repo.merged_at,
          url: repo.url,
          title: repo.title,
          body: repo.body,
        };
      });

    return filteredData;
  } catch (error) {
    console.error('Error fetching PRs from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching PRs' };
  }
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
