"use client";

import dynamic from "next/dynamic";
import {useProjectQuery} from "#/src/hooks/query/useProjectQuery";
import ExperienceSkeletion from "#/src/components/experience/ExperienceSkeletion";
const ExperienceList = dynamic(() => import("#/src/components/experience/ExperienceList"), {
  ssr: false,
});

const Experience = () => {
  const {isLoading, data} = useProjectQuery();

  if (isLoading || !data) {
    return <ExperienceSkeletion />;
  }

  return (
    <article className="w-full">
      <ExperienceList data={data} />
    </article>
  );
};

export default Experience;
