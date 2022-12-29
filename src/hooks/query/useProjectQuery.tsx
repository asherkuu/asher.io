import {useQuery} from "@tanstack/react-query";
import {indexQuery} from "#/src/sanity/queries/project";
import {sanityFetch} from "#/src/util/fetch";
import {Project} from "#/src/sanity/types";

const useProjectApi = () => {
  const {isLoading, error, data} = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: async () => await sanityFetch({query: indexQuery}),
  });

  return {isLoading, error, data};
};

export default useProjectApi;
