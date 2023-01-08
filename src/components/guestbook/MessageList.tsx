"use client";

import {useSession} from "next-auth/react";
import {InfiniteData} from "@tanstack/react-query";
import MessageItem from "#/src/components/guestbook/MessageItem";
import {GuestbookTypes, InfinityResponseType} from "#/src/types";

type MessageListProps = {
  data: InfiniteData<InfinityResponseType<GuestbookTypes[]>> | undefined;
  onDelete: (id: string) => void;
};

const MessageList: React.FC<MessageListProps> = ({data, onDelete}) => {
  const {data: session} = useSession();

  return (
    <article className="w-full h-full">
      <div className="mt-4 space-y-8">
        {data?.pages?.map(page =>
          page?.body?.map(item => (
            <MessageItem key={item.id} item={item} user={session?.user} onDelete={onDelete} />
          )),
        )}
      </div>
    </article>
  );
};

export default MessageList;
