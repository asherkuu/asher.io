import {useQuery} from "@tanstack/react-query";
import {projectBySlugQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";
import {Project} from "#/src/types";
import {mdxToHtml} from "#/lib/mdx";

export const useProjectBySlugQuery = (slug: string) => {
  const {isLoading, error, data} = useQuery<Project>({
    queryKey: ["project", slug],
    queryFn: async () => {
      const response = await sanityFetch({query: projectBySlugQuery(slug), isClient: true});
      const {html, readingTime} = await mdxToHtml(response?.content);
      response.html = html;
      response.readingTime = readingTime;
      return response;
    },
  });

  return {isLoading, error, data};
};
