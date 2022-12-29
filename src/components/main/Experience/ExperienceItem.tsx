import Link from "next/link";
import dayjs from "dayjs";
import {Project} from "#/src/sanity/types";
import SummaryList from "./Summary/SummaryList";

type ExperienceItemTypes = {
  data: Project;
};

const ExperienceItem: React.FC<ExperienceItemTypes> = ({data}) => {
  const startedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");
  const endedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");

  return (
    <div className="flex flex-col w-full">
      <Link href={`/experience/${data?.slug}`}>
        <div className="flex items-center gap-4 w-full dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">{data?.title}</h4>
          <p className="text-lg font-light text-gray-500 dark:text-gray-300">Front-end</p>
        </div>
      </Link>

      <div className="flex gap-4">
        <p className="text-gray-500 dark:text-gray-300">{data?.workedAt}</p>
        <p className="text-gray-500 dark:text-gray-300">{`${startedAt} - ${endedAt}`}</p>
      </div>

      <SummaryList data={data?.summaries} />
    </div>
  );
};

export default ExperienceItem;
