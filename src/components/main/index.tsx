import React from "react";
import Bio from "#/src/components/main/Bio";
import Skills from "#/src/components/main/Skills";
import Summary from "#/src/components/main/Experience";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 sm:gap-16 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <Bio />
      <Skills />
      <Summary />
    </div>
  );
};

export default Main;
