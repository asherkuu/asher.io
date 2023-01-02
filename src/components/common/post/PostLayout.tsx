import React, {Suspense} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import dayjs from "dayjs";
const ViewCounter = dynamic(() => import("#/src/components/common/post/ViewCounter"), {ssr: false});
import {PostLayoutType} from "#/src/types";

type PostLayoutProps = {
  children: React.ReactNode;
  post: PostLayoutType | undefined;
};

const PostLayout: React.FC<PostLayoutProps> = ({children, post}) => {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post?.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Lee Robinson"
            height={24}
            width={24}
            sizes="20vw"
            src="/static/images/asher.png"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {"Asher Kim / "}
            {dayjs(post?.publishedAt).format("MMMM DD, YYYY")}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {post?.readingTime}
          {` • `}
          <ViewCounter slug={post?.slug!} />
        </p>
      </div>
      <Suspense fallback={null}>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">{children}</div>
      </Suspense>
    </article>
  );
};

export default PostLayout;
