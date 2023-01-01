import {Summaries} from "#/src/sanity/types";
import React from "react";
import SummaryItem from "#/src/components/main/Experience/Summary/SummaryItem";

type SummaryListProps = {
  data: Summaries[];
};

const SummaryList: React.FC<SummaryListProps> = ({data}) => {
  return (
    <ul className="ml-4">
      {data?.map(summary => (
        <SummaryItem key={summary._id} data={summary} />
      ))}
    </ul>
  );
};

export default SummaryList;
