import {useQuery} from "@tanstack/react-query";
import {GuestbookTypes} from "#/src/types";

const useGuestbookQuery = () => {
  const {isLoading, error, data} = useQuery<Promise<GuestbookTypes[]>>({
    queryKey: ["guestbook"],
    queryFn: async () => await fetch("/api/guestbook").then(res => res.json()),
  });

  return {isLoading, error, data};
};

export default useGuestbookQuery;
