import {InfiniteData, useInfiniteQuery, useMutation} from "@tanstack/react-query";
import {GuestbookTypes} from "#/src/types";
import {queryClient} from "#/src/query/queryClient";

type UseGuestBookMutateProps = {
  value: string;
};

export const useGuestbookQuery = () => {
  return useInfiniteQuery({
    queryKey: ["guestbook"],
    queryFn: async ({pageParam = 1}) => {
      return await fetch(`/api/guestbook?page=${pageParam}`).then(res => res.json());
    },
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
};

export const useGuestbookMutation = () => {
  return useMutation({
    mutationFn: async ({value}: UseGuestBookMutateProps) => {
      return await fetch("/api/guestbook", {
        body: JSON.stringify({
          body: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(res => res.json());
    },
    onSuccess(data: GuestbookTypes) {
      queryClient.setQueryData<InfiniteData<GuestbookTypes[]>>(["guestbook"], oldData => {
        if (oldData) {
          const newData = {...oldData};
          newData.pages[0].unshift(data);
          return newData;
        } else {
          return undefined;
        }
      });
    },
  });
};
