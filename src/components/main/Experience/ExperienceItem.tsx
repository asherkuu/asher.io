import Link from "next/link";
import dayjs from "dayjs";
import {Project} from "#/src/sanity/types";
import SummaryList from "#/src/components/main/Experience/Summary/SummaryList";

type ExperienceItemProps = {
  data: Project;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({data}) => {
  const startedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");
  const endedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");

  return (
    <div className="flex flex-col w-full [&:not(:last-child)]:border-b-[1px] border-peri-300 py-8 transform transition-all hover:scale-[1.01]">
      <Link href={`/experience/${data?.slug}`}>
        <div className="flex  items-center justify-between w-full ">
          <div className="flex gap-4 dark:border-gray-700">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">{data?.title}</h4>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">{`${startedAt} - ${endedAt}`}</p>
        </div>
        <div className="flex justify-end w-full gap-4">
          <p className=" text-sm font-light text-gray-500 dark:text-gray-300">{data?.position}</p>
        </div>

        <SummaryList data={data?.summaries} />
      </Link>
    </div>
  );
};

export default ExperienceItem;
