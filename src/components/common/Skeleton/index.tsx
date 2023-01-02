import React from "react";
import clsx from "clsx";

type SkeletonProps = {
  className: string;
};

const Skeleton: React.FC<SkeletonProps> = ({className}) => {
  return <div className={clsx(className, `bg-gray-200 rounded-md dark:bg-gray-700`)}></div>;
};

export default Skeleton;
