import blockContent from "#/src/sanity/schemas/blockContent";
import category from "#/src/sanity/schemas/category";
import post from "#/src/sanity/schemas/post";
import author from "#/src/sanity/schemas/author";
import {project, projectSummaries, projectType} from "#/src/sanity/schemas/project";

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  project,
  projectSummaries,
  projectType,
];
