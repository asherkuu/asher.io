import React from "react";
import Skeleton from "../common/Skeleton";
import SkeletonContainer from "../common/Skeleton/SkeletonContainer";

const MessageSkeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      <Skeleton className="w-80 h-2 mb-4" />
      <Skeleton className="w-80 h-2 mb-4" />
      <Skeleton className="w-80 h-2 mb-4" />
      <Skeleton className="w-80 h-2 mb-4" />
      <Skeleton className="w-80 h-2 mb-4" />
    </SkeletonContainer>
  );
};

export default MessageSkeleton;
