import React from "react";
import {Summaries} from "#/src/sanity/types";

type SummaryItemTypes = {
  data: Summaries;
};

const SummaryItem: React.FC<SummaryItemTypes> = ({data}) => {
  return (
    <li className="relative mt-2">
      <div className="absolute left-[-18px] top-2 w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
      <p>{data?.title}</p>
    </li>
  );
};

export default SummaryItem;
