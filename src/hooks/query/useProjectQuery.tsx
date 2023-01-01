import {useQuery} from "@tanstack/react-query";
import {indexQuery, projectBySlugQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";
import {Project} from "#/src/sanity/types";
import {mdxToHtml} from "#/lib/mdx";

export const useProjectApi = () => {
  const {isLoading, error, data} = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: async () => await sanityFetch({query: indexQuery}),
  });

  return {isLoading, error, data};
};

export const useProjectBySlugApi = async (slug: string) => {
  const {data, isLoading} = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => await sanityFetch({query: projectBySlugQuery(slug)}),
    onSuccess: async data => {
      console.log("🚀 ~ file: useProjectQuery.tsx:26 ~ useProjectBySlugApi ~ data", data);
      const {html, tweetIDs, readingTime} = await mdxToHtml(data?.body);
      console.log(html);
      return {html, tweetIDs, readingTime};
    },
  });
  // console.log(data);
  // const {html, tweetIDs, readingTime} = await mdxToHtml(data?.body);
  // console.log(html);
  return {data, isLoading}; //, html, tweetIDs, readingTime};
};
