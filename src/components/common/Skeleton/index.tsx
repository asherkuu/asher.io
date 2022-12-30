import React from "react";
import clsx from "clsx";

type SkeletonProps = {
  className?: string;
  w?: number;
  h?: number;
  mb?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({className, w, h, mb}) => {
  return (
    <div
      className={clsx(
        className,
        w && `w-${w}`,
        h && `h-${h}`,
        mb && `mb-${mb}`,
        `bg-gray-200 rounded-full dark:bg-gray-700`,
      )}
    ></div>
  );
};

export default Skeleton;
