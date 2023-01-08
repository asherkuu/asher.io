import {InfiniteData, useInfiniteQuery, useMutation} from "@tanstack/react-query";
import {GuestbookTypes, InfinityResponseType} from "#/src/types";
import {queryClient} from "#/src/query/queryClient";
import {useLastIdStore} from "#/src/store/gusetbook";
import {toast} from "react-hot-toast";

type UseGuestBookMutateProps = {
  value: string;
};

export const useGuestbookQuery = () => {
  const {lastId, setLastId} = useLastIdStore(state => state);

  const _setListIdInStore = (list: GuestbookTypes[]) => {
    const lastIndex = list.length - 1;
    const lastDataId = Number(list[lastIndex]?.id) || undefined;
    lastDataId !== undefined && setLastId(lastDataId);
  };

  return useInfiniteQuery({
    queryKey: ["guestbook"],
    queryFn: async ({pageParam = 1}) => {
      let url = `/api/guestbook?page=${pageParam}`;
      lastId && (url += `&lastId=${lastId}`);

      const response = await fetch(url).then(res => res.json());

      _setListIdInStore(response.body);
      return response;
    },
    getNextPageParam: lastPage => {
      return lastPage?.body?.length > 0 && lastPage?.page !== undefined
        ? lastPage?.page + 1
        : undefined;
    },
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
      queryClient.setQueryData<InfiniteData<InfinityResponseType<GuestbookTypes[]>>>(
        ["guestbook"],
        oldData => {
          if (oldData) {
            const newData = {...oldData};
            newData?.pages[0]?.body?.unshift(data);
            return newData;
          } else {
            return undefined;
          }
        },
      );
    },
  });
};

export const useGuestbookDeleteMutation = () => {
  return useMutation({
    mutationFn: async ({id}: {id: string}) => {
      return await fetch(`/api/guestbook/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(res => res.json());
    },
    onSuccess(data: GuestbookTypes) {
      queryClient.setQueryData<InfiniteData<InfinityResponseType<GuestbookTypes[]>>>(
        ["guestbook"],
        oldData => {
          if (oldData) {
            const newData = {...oldData};

            newData.pages.map((page, index) => {
              const filtered = page.body.filter(
                item => Number(item.id) !== Number(data.id) && item,
              );
              newData.pages[index].body = filtered;
              return page.body.filter(item => Number(item.id) !== Number(data.id) && item);
            });

            toast.success("삭제되었습니다.");
            return newData;
          } else {
            return undefined;
          }
        },
      );
    },
  });
};
