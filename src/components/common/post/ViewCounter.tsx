"use client";

import {useViewCounterQuery} from "#/src/hooks/query/useViewCounterQuery";

type ViewCounterProps = {
  slug: string;
};

const ViewCounter: React.FC<ViewCounterProps> = ({slug}) => {
  const {data} = useViewCounterQuery({slug});
  const views = new Number(data?.total);
  return <span>{`${views > 0 ? views.toLocaleString() : "–––"} views`}</span>;
};

export default ViewCounter;
