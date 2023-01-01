import React from "react";

type SkillIconProps = {
  icon: React.ReactNode;
  text: string;
};

const SkillIcon: React.FC<SkillIconProps> = ({icon, text}) => {
  return (
    <div className="flex items-center justify-center gap-2 p-2">
      {icon}
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default SkillIcon;
