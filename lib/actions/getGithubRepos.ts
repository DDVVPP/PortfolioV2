'use server';

export const getGithubRepos = async () => {
  try {
    const repoNames = await getThisYearsPublicRepoNames();
    // console.log('reppoNames', repoNames);
    const repoPRs =
      repoNames &&
      (await Promise.all(
        repoNames.map(async (repoName) => {
          const repoPR = await getRepoPRs(repoName);
          return repoPR;
        })
      ));
    const repoCommits =
      repoNames &&
      (await Promise.all(
        repoNames.map(async (repoName) => {
          const repoPR = await getRepoCommits(repoName);
          return repoPR;
        })
      ));
    console.log('repoPRs', repoPRs);
    console.log('repoCommits', repoCommits);
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
    .filter((repo) => repo.name !== 'DDVVPP')
    .map((repo) => {
      return repo.name;
    });

  return repoNames;
};

const getRepoPRs = async (repoName: string) => {
  // console.log('repoName', repoName);
  const response = await fetch(
    `https://api.github.com/repos/DDVVPP/${repoName}/pulls?state=all`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return {
    repoName,
    url: data[0]?.url,
    title: data[0]?.title,
    body: data[0]?.body,
  };
};

const getRepoCommits = async (repoName: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/DDVVPP/${repoName}/commits`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return {
      repoName,
      date: data[0]?.commit.author.date,
      message: data[0]?.commit.message,
      url: data[0]?.html_url,
    };
  } catch (error) {
    console.error('Error fetching commits from GitHub:', error);
    return { error: 'An unexpected error occurred while fetching commits' };
  }
};
