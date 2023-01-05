import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import {urlForImage} from "#/src/sanity/sanity";
import {Project} from "#/src/types";

type ExperienceItemProps = {
  data: Project;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({data}) => {
  const startedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");
  const endedAt = data?.workEndedAt.startsWith("9")
    ? "now"
    : dayjs(data?.workEndedAt).format("YYYY. MM.");

  return (
    <Link href={`/experience/${data.slug}`} passHref>
      <div className="flex flex-col justify-center items-center">
        {data.mainImage && (
          <div className="row-center border-[1px] border-b-0 border-gray-200 dark:border-peri-300 rounded-t-2xl h-64 sm:h-48 w-full">
            <Image
              src={urlForImage(data.mainImage)?.url()}
              width={328}
              height={192}
              alt={data.title}
              className="w-[100%] h-[100%] object-cover rounded-t-2xl"
            />
          </div>
        )}
        <div className="flex flex-col w-full border-[1px] border-gray-200 dark:border-peri-300 rounded-b-2xl py-4 px-4 bg-white dark:bg-black">
          <div className="flex justify-start items-start w-full">
            <p className="text-lg text-black dark:text-white">{data.title}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-tight">
              {data.position}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-tight">{`${startedAt} - ${endedAt}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceItem;
