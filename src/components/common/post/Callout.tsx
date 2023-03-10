import React from "react";

type CalloutProps = {
  emoji: React.ReactNode;
  children: React.ReactNode;
};

const Callout: React.FC<CalloutProps> = ({emoji, children}) => {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
};

export default Callout;
