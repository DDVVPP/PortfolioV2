import ProjectDetails from '@/components/ProjectDetails';
import { projects } from '@/lib/constants';

const DevTodayWrapper = () => {
  return <ProjectDetails project={projects[0]} />;
};

export default DevTodayWrapper;
