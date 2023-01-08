"use client";

import React, {useLayoutEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {useSession} from "next-auth/react";
import {useInView} from "react-intersection-observer";
import SignForm from "#/src/components/guestbook/SignForm";
import LoadingSpinner from "#/src/components/common/LoadingSpinner";

import {
  useGuestbookDeleteMutation,
  useGuestbookMutation,
  useGuestbookQuery,
} from "#/src/hooks/query/useGuestbookQuery";
import {Form, FormState, GuestbookTypes} from "#/src/types";
import MessageSkeleton from "#/src/components/guestbook/MessageSkeleton";

const MessageList = dynamic(() => import("#/src/components/guestbook/MessageList"), {ssr: false});

type GuestbookProps = {
  fallbackData: GuestbookTypes[];
};

const Guestbook: React.FC<GuestbookProps> = ({fallbackData}) => {
  const {data: session, status: sessionStatus} = useSession();
  const mutation = useGuestbookMutation();
  const deleteMutation = useGuestbookDeleteMutation();
  const {isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage} = useGuestbookQuery();
  const inputEl = useRef<HTMLInputElement>(null);
  const [ref, isView] = useInView();
  const [form, setForm] = useState<FormState>({state: Form.Initial});

  useLayoutEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, hasNextPage, fetchNextPage]);

  const handleSubmitLeaveEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({state: Form.Loading});

    await mutation.mutate(
      {
        value: inputEl?.current?.value as string,
      },
      {
        onError: () => {
          setForm({
            state: Form.Error,
            message: "Oops... Something wrong...",
          });
        },
        onSuccess: () => {
          inputEl.current!.value = "";
          setForm({
            state: Form.Success,
            message: `Hooray! 방명록을 남겨주셔서 감사해요 !`,
          });
        },
      },
    );
  };

  const handleDelete = async (id: string) => {
    await deleteMutation.mutate({id});
  };

  const SignFormPrpos = {
    sessionStatus,
    session,
    inputEl,
    form,
    onSubmitLeaveEntry: handleSubmitLeaveEntry,
  };

  return (
    <article className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
      <div className="w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          방명록
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          아래에 의견을 남겨주세요! 정보, 지식, 유머 등 무엇이든 좋아요 😃
        </p>
        <SignForm {...SignFormPrpos} />
      </div>

      {isLoading ? (
        <div className="mt-4 space-y-8">
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </div>
      ) : (
        <MessageList data={data} onDelete={handleDelete} />
      )}

      {isFetchingNextPage && (
        <div className="flex justify-center w-full my-8">
          <LoadingSpinner />
        </div>
      )}

      {hasNextPage && <div ref={ref} />}
    </article>
  );
};

export default Guestbook;
