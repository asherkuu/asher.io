"use client";

import React from "react";
import {MDXRemote} from "next-mdx-remote";
import {MDXComponents} from "#/src/components/common/post/MDXComponents";
import {useProjectBySlugApi} from "#/src/hooks/query/useProjectQuery";

type GusetbookDetailProps = {
  slug: string;
  html: any;
};

const GusetbookDetail: React.FC<GusetbookDetailProps> = ({slug, html}) => {
  console.log("🚀 ~ file: index.tsx:14 ~ html", html);
  //   const {html, isError} = useProjectBySlugApi(slug);
  //   console.log("🚀 ~ file: index.tsx:14 ~ html", html);

  return (
    <div className="text-black">
      <MDXRemote
        {...html}
        components={
          {
            ...MDXComponents,
          } as any
        }
      />
    </div>
  );
};

export default GusetbookDetail;
