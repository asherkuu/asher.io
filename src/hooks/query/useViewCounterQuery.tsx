import {Views} from "#/src/types";
import {useQuery} from "@tanstack/react-query";
import React from "react";

type useViewCounterQueryProps = {
  slug: string;
};

export const useViewCounterQuery = ({slug}: useViewCounterQueryProps) => {
  const {isLoading, error, data} = useQuery<Views>({
    queryKey: ["view", slug],
    queryFn: async () =>
      await fetch(`/api/views/${slug}`, {method: "POST"}).then(res => res.json()),
  });

  return {isLoading, error, data};
};
