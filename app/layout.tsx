import React from "react";
import dynamic from "next/dynamic";
import {Inter} from "@next/font/google";
import clsx from "clsx";

import Container from "#/src/components/Container";
import ThemeProvider from "#/src/components/provider/ThemeProvider";
import AnalyticsProvider from "#/src/components/provider/AnalyticsProvider";

const Contact = dynamic(() => import("#/src/components/Contact"), {ssr: false});

import "#/styles/globals.css";

const interVariable = Inter();

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body
        className={clsx(
          interVariable.className,
          "bg-white dark:bg-black text-white dark:text-black",
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Container>{children}</Container>
          </div>

          <div
            id="__contact"
            role="dialog"
            aria-modal="true"
            aria-labelledby="overlay"
            aria-label="modal"
          />
          <Contact />
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
