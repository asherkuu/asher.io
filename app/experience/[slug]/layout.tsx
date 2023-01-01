import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col max-w-2xl border-gray-200 dark:border-gray-700 pb-16">
      {children}
    </div>
  );
};

export default Layout;
