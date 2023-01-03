import ExperienceSkeletion from "#/src/components/experience/ExperienceSkeletion";
import ExperienceList from "#/src/components/experience/ExperienceList";

const Experience = ({data}: any) => {
  if (!data) {
    return <ExperienceSkeletion />;
  }

  return (
    <article className="w-full">
      <ExperienceList data={data} />
    </article>
  );
};

export default Experience;
