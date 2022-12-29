"use client";

import ExperienceItem from "#/src/components/main/Experience/ExperienceItem";
import ExperienceSkeleton from "#/src/components/main/Experience/ExperienceSkeleton";
import useProjectApi from "#/src/hooks/query/useProjectQuery";

const ExperienceList: React.FC = () => {
  const {isLoading, error, data} = useProjectApi();

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <div className="flex flex-col gap-4 mt-4">
          <ExperienceSkeleton />
          <ExperienceSkeleton />
        </div>
      ) : data ? (
        data?.map(d => <ExperienceItem key={d._id} data={d} />)
      ) : (
        <div>
          <p>:- (</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceList;
