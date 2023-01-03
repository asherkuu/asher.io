import ExperienceSkeleton from "#/src/components/main/Experience/ExperienceSkeleton";
import ExperienceItem from "#/src/components/main/Experience/ExperienceItem";
import {Project} from "#/src/types";

type ExperienceListProps = {
  project: Project[];
};

const ExperienceList: React.FC<ExperienceListProps> = ({project}) => {
  return (
    <div className="flex flex-col gap-4">
      {!project ? (
        <div className="flex flex-col gap-4 mt-4">
          <ExperienceSkeleton />
          <ExperienceSkeleton />
        </div>
      ) : project ? (
        project?.map(data => <ExperienceItem key={data._id} data={data} />)
      ) : (
        <div>
          <p>:- (</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceList;
