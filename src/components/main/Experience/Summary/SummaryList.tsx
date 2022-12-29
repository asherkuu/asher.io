import {Summaries} from "#/src/sanity/types";
import React from "react";
import SummaryItem from "./SummaryItem";

type SummaryListTypes = {
  data: Summaries[];
};

const SummaryList: React.FC<SummaryListTypes> = ({data}) => {
  return (
    <ul className="ml-8">
      {data?.map(summary => (
        <SummaryItem key={summary._id} data={summary} />
      ))}
    </ul>
  );
};

export default SummaryList;
