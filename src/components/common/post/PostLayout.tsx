import React from "react";
import {Project, Post} from "#/src/sanity/types";

type PostLayoutProps = {
  children: React.ReactNode;
  post: Project | Post;
};

const PostLayout: React.FC<PostLayoutProps> = ({children, post}) => {
  return <div>PostLayout</div>;
};

export default PostLayout;
