import Bio from "#/src/components/main/Bio";
import Skills from "#/src/components/main/Skills";
import Summary from "#/src/components/main/Experience";
import {Project} from "#/src/types";

type MainProps = {
  project: Project[];
};

const Main: React.FC<MainProps> = ({project}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-16 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <Bio />
      <Skills />
      <Summary project={project} />
    </div>
  );
};

export default Main;
