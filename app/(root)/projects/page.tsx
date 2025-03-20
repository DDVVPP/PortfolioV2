import Projects from '@/components/Projects';
import { getGithubPRsAndCommits } from '@/lib/actions/getGithubPRsAndCommits';

const ProjectsWrapper = async () => {
  const { repoPRs, repoCommits } = await getGithubPRsAndCommits();

  return <Projects repoPRs={repoPRs} repoCommits={repoCommits} />;
};

export default ProjectsWrapper;
