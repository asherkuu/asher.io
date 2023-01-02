"use client";

import dynamic from "next/dynamic";
const MDXRemote = dynamic(() => import("next-mdx-remote").then(d => d.MDXRemote), {ssr: false});
import PostLayout from "#/src/components/common/post/PostLayout";
import {MDXComponents} from "#/src/components/common/post/MDXComponents";
import DetailSkeleton from "#/src/components/experience/[slug]/DetailSkeleton";
import {useProjectBySlugQuery} from "#/src/hooks/query/useProjectQuery";
import {PostLayoutType} from "#/src/types";

type GusetbookDetailProps = {
  slug: string;
};

const GusetbookDetail: React.FC<GusetbookDetailProps> = ({slug}) => {
  const {data, isLoading} = useProjectBySlugQuery(slug);

  if (isLoading || !data) {
    return <DetailSkeleton />;
  }

  return (
    <PostLayout post={data as PostLayoutType}>
      <MDXRemote
        compiledSource={data?.html?.compiledSource as string}
        components={
          {
            ...MDXComponents,
          } as any
        }
      />
    </PostLayout>
  );
};

export default GusetbookDetail;
