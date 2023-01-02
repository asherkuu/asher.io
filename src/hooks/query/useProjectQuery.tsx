import {useQuery} from "@tanstack/react-query";
import {indexQuery, projectBySlugQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";
import {Project} from "#/src/sanity/types";
import {mdxToHtml} from "#/lib/mdx";
import {MDXRemoteSerializeResult} from "next-mdx-remote";
import {MDXHtml} from "#/src/types";

export const useProjectApi = () => {
  const {isLoading, error, data} = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: async () => await sanityFetch({query: indexQuery}),
  });

  return {isLoading, error, data};
};

export const useProjectBySlugApi = (slug: string) => {
  const {isLoading, error, data} = useQuery<Project & {html: MDXHtml; readingTime: string}>({
    queryKey: ["project", slug],
    queryFn: async () => {
      const response = await sanityFetch({query: projectBySlugQuery(slug)});
      const {html, readingTime} = await mdxToHtml(response?.content);
      response.html = html;
      response.readingTime = readingTime;
      return response;
    },
  });

  return {isLoading, error, data};
};
