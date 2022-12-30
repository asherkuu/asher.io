"use client";

import {SessionProvider} from "next-auth/react";
import {QueryClientProvider} from "@tanstack/react-query";

import {queryClient} from "#/src/query/queryClient";
import ThemeProvider from "#/src/components/provider/ThemeProvider";
import AnalyticsProvider from "#/src/components/provider/AnalyticsProvider";

type RootProvider = {
  children: React.ReactNode;
};

const RootProvider: React.FC<RootProvider> = ({children}) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
        <AnalyticsProvider />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default RootProvider;
