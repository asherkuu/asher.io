"use client";

import React from "react";
import dynamic from "next/dynamic";
import {Inter} from "@next/font/google";
import clsx from "clsx";

import RootProvider from "#/src/components/provider/RootProvider";
import Container from "#/src/components/Container";
const Contact = dynamic(() => import("#/src/components/Contact"), {ssr: false});
import "styles/globals.css";

const interVariable = Inter();

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = props => {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body
        className={clsx(
          interVariable.className,
          "bg-white dark:bg-black text-white dark:text-black",
        )}
      >
        <RootProvider>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <Container>{props.children}</Container>
          </div>

          <div
            id="__contact"
            role="dialog"
            aria-modal="true"
            aria-labelledby="overlay"
            aria-label="modal"
          />
          <Contact />
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
