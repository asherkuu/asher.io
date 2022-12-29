import React from "react";
import Skeleton from "#/src/components/common/Skeleton";
import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";

const ExperienceSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton className="w-64 sm:w-96 h-5 mb-4" />
      <Skeleton className="w-56 sm:w-80 h-5 mb-4" />
      <Skeleton className="w-48 sm:w-60 h-4 mb-2.5" />
      <Skeleton className="w-48 sm:w-60 h-4 mb-2.5" />
      <Skeleton className="w-48 sm:w-60 h-4 mb-2.5" />
    </SkeletonContainer>
  );
};

export default ExperienceSkeleton;
