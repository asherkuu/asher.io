"use client";

import React from "react";
import {MDXRemote} from "next-mdx-remote";
import {MDXComponents} from "#/src/components/common/post/MDXComponents";
import {useProjectBySlugApi} from "#/src/hooks/query/useProjectQuery";

type GusetbookDetailProps = {
  slug: string;
};

const GusetbookDetail: React.FC<GusetbookDetailProps> = ({slug}) => {
  const {data, isLoading} = useProjectBySlugApi(slug);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="text-black">
      <MDXRemote
        compiledSource={data?.html?.compiledSource as string}
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
