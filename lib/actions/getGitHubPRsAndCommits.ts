'use server';

import { projects } from '../constants';
import { Repo, RepoCommit, RepoPR } from '../types';

export const getGitHubPRsAndCommits = async () => {
  try {
    // Grab the last item in link array - ie.'DevToday' in 'https://github.com/DDVVPP/DevToday'
    const repoNamesFromUIProjects = projects.map((project) =>
      project.githubLink.split('/').pop()
    );
    // Helper function to fetch specific year's repos
    const repoNames = await getThisYearsPublicRepoNames('2026');
    // Match fetched repos to repos in project tab
    const filteredRepoNames = repoNames.filter((name: string) =>
      repoNamesFromUIProjects.includes(name)
    );

    // Helper functions to fetch PRs and commits from specified repo in parallel
    const [repoPRsFetch, repoCommitsFetch] = await Promise.all([
      Promise.all(
        filteredRepoNames.map((repoName: string) =>
          getRepoPRs(repoName, 2, '2026')
        )
      ),
      Promise.all(
        filteredRepoNames.map((repoName: string) =>
          getRepoCommits(repoName, 4, '2026')
        )
      ),
    ]);
    const repoPRs: RepoPR[] = repoPRsFetch.flat();
    const repoCommits: RepoCommit[] = repoCommitsFetch.flat();

    return {
      error: null,
      repoPRs,
      repoCommits,
    };
  } catch (error) {
    console.error('Error fetching from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching from GitHub' };
  }
};

const getThisYearsPublicRepoNames = async (year: string) => {
  try {
    const response = await fetch(
      'https://api.github.com/users/DDVVPP/repos?visibility=public',
      {
        next: { revalidate: 86400 }, // once a day
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Return the name of repos that were updated this year
    const repoNames = data
      .filter((repo: Repo) => repo.updated_at.startsWith(year))
      .map((repo: Repo) => repo.name);

    return repoNames;
  } catch (error) {
    console.error('Error fetching repoNames from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching repoNames' };
  }
};

const getRepoPRs = async (
  repoName: string,
  numberOfPRs: number,
  year: string
) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/DDVVPP/${repoName}/pulls?state=all`,
      {
        next: { revalidate: 86400 }, // once a day
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Find repos that are updated this year and sort them by most recent
    const repoPRsUpdatedThisYear = data
      .filter((repo: Repo) => repo.updated_at.startsWith(year))
      .sort((a: Repo, b: Repo) => b.updated_at.localeCompare(a.updated_at));

    // Return the n most recent repos with the specified object properties
    const filteredData = repoPRsUpdatedThisYear
      .slice(0, numberOfPRs)
      .map((repo: Repo) => {
        return {
          repoName,
          state: repo.state,
          mergedAt: repo.merged_at,
          url: repo.html_url,
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

const getRepoCommits = async (
  repoName: string,
  numberOfCommits: number,
  year: string
) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/DDVVPP/${repoName}/commits`,
      {
        next: { revalidate: 86400 }, // once a day
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Find repos that are updated this year and sort them by most recent
    const repoCommitsUpdatedThisYear = data
      .filter((repo: Repo) => repo.commit.author.date.startsWith(year))
      .sort((a: Repo, b: Repo) =>
        b.commit.author.date.localeCompare(a.commit.author.date)
      );

    const shouldHideCommitMessage = (message: string) => {
      const trimmedMessage = message.trim().toLowerCase();

      // hide squash merge default message
      if (trimmedMessage.startsWith('merge pull request')) return false;
      // hide plain merge commits
      if (trimmedMessage.startsWith('merge branch')) return false;

      return true;
    };

    // Return the n most recent repos with the specified object properties
    const filteredData = repoCommitsUpdatedThisYear
      .filter((repo: Repo) => shouldHideCommitMessage(repo.commit.message))
      .slice(0, numberOfCommits)
      .map((repo: Repo) => {
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
