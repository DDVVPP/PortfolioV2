import Projects from '@/components/Projects';
import { getGitHubPRsAndCommits } from '@/lib/actions/getGithubPRsAndCommits';

const ProjectsWrapper = async () => {
  const { repoPRs, repoCommits } = await getGitHubPRsAndCommits();

  return <Projects repoPRs={repoPRs} repoCommits={repoCommits} />;
};

export default ProjectsWrapper;
