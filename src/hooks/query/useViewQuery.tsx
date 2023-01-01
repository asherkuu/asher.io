import {useQuery} from "@tanstack/react-query";
import {Views} from "#/src/sanity/types";

export const useViewApi = () => {
  const {isLoading, error, data} = useQuery<Views>({
    queryKey: ["views"],
    queryFn: async () => await fetch("/api/views").then(res => res.json()),
  });

  return {isLoading, error, data};
};
