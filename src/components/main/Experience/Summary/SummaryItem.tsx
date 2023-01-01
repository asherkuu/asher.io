import React from "react";
import {Summaries} from "#/src/sanity/types";

type SummaryItemProps = {
  data: Summaries;
};

const SummaryItem: React.FC<SummaryItemProps> = ({data}) => {
  return (
    <li className="relative mt-2">
      <div className="absolute left-[-12px] top-2 w-1 h-1 bg-black dark:bg-white rounded-full"></div>
      <p className="text-gray-500 dark:text-gray-300">{data?.title}</p>
    </li>
  );
};

export default SummaryItem;
