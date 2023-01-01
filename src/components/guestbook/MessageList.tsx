"use client";

import {useSession} from "next-auth/react";
import {InfiniteData} from "@tanstack/react-query";
import MessageSkeleton from "#/src/components/guestbook/MessageSkeleton";
import MessageItem from "#/src/components/guestbook/MessageItem";
import {GuestbookTypes, InfinityResponseType} from "#/src/types";

type MessageListProps = {
  data: InfiniteData<InfinityResponseType<GuestbookTypes[]>> | undefined;
  isLoading: boolean;
};

const MessageList: React.FC<MessageListProps> = ({data, isLoading}) => {
  const {data: session} = useSession();

  return (
    <article className="w-full">
      {isLoading ? (
        <div className="mt-4 space-y-8">
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </div>
      ) : (
        <div className="mt-4 space-y-8">
          {data?.pages?.map(page =>
            page?.body?.map((item: GuestbookTypes) => (
              <MessageItem key={item.id} item={item} user={session?.user} />
            )),
          )}
        </div>
      )}
    </article>
  );
};

export default MessageList;
