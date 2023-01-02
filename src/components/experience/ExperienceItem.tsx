import React from "react";
import Link from "next/link";
import Image from "next/image";
import {urlForImage} from "#/src/sanity/sanity";
import {Project} from "#/src/types";

type ExperienceItemProps = {
  data: Project;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({data}) => {
  return (
    <Link href={`/experience/${data.slug}`} passHref>
      <div className="flex flex-col justify-center items-center">
        {data.mainImage && (
          <div className="row-center border-[1px] border-grey-100 rounded-2xl h-64 sm:h-48 w-full">
            <Image
              src={urlForImage(data.mainImage)?.url()}
              width={328}
              height={192}
              alt={data.title}
              className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
          </div>
        )}
        <p className="text-black">{data.title}</p>
      </div>
    </Link>
  );
};

export default ExperienceItem;
