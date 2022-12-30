import React from "react";

type SkeletonContainerProps = {
  children: React.ReactNode;
};

const SkeletonContainer: React.FC<SkeletonContainerProps> = ({children}) => {
  return (
    <div role="status" className="w-full min-w-min animate-pulse">
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonContainer;
