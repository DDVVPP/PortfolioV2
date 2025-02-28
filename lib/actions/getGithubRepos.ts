'use server';

export const getGithubRepos = async () => {
  try {
    const repoNames = await getThisYearsPublicRepoNames();

    const repoPRs =
      repoNames &&
      (await Promise.all(
        repoNames.map(async (repoName) => {
          const repoPRs = await getRepoPRs(repoName, 2);
          return repoPRs;
        })
      ));

    const repoCommits =
      repoNames &&
      (await Promise.all(
        repoNames.map(async (repoName) => {
          const repoCommits = await getRepoCommits(repoName, 2);
          return repoCommits;
        })
      ));
    return {
      error: null,
      repoPRs: repoPRs[0],
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
  const reposUpdatedThisYear = data.filter((repo) => {
    const updatedAtYear = repo.updated_at.split('-')[0];
    return updatedAtYear === '2025';
  });
  const repoNames = reposUpdatedThisYear
    .filter((repo) => !['DDVVPP', 'HackForLA-Website'].includes(repo.name))
    .map((repo) => {
      return repo.name;
    });

  return repoNames;
};

const getRepoPRs = async (repoName: string, numberOfRepos: number) => {
  // console.log('repoName', repoName);
  const response = await fetch(
    `https://api.github.com/repos/DDVVPP/${repoName}/pulls?state=all`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  const filteredData = data.map((repo) => {
    return {
      repoName,
      url: repo.url,
      title: repo.title,
      body: repo.body,
    };
  });

  return filteredData;
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
    const filteredData = data.map((repo) => {
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
