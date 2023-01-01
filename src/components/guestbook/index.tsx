"use client";

import React, {useLayoutEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {useSession} from "next-auth/react";
import {useInView} from "react-intersection-observer";
import SignForm from "#/src/components/guestbook/SignForm";
import LoadingSpinner from "#/src/components/common/LoadingSpinner";
import {useGuestbookMutation, useGuestbookQuery} from "#/src/hooks/query/useGuestbookQuery";
import {Form, FormState, GuestbookTypes} from "#/src/types";

const MessageList = dynamic(() => import("#/src/components/guestbook/MessageList"), {ssr: false});

type GuestbookProps = {
  fallbackData: GuestbookTypes[];
};

const Guestbook: React.FC<GuestbookProps> = ({fallbackData}) => {
  const {data: session, status: sessionStatus} = useSession();
  const mutation = useGuestbookMutation();
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
            message: `Hooray! Thanks for signing my Guestbook.`,
          });
        },
      },
    );
  };

  const SignFormPrpos = {
    sessionStatus,
    session,
    inputEl,
    form,
    onSubmitLeaveEntry: handleSubmitLeaveEntry,
  };

  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <div className="">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Leave a comment below. It could be anything – appreciation, information, wisdom, or even
          humor. Surprise me!
        </p>
        <SignForm {...SignFormPrpos} />
      </div>

      <MessageList data={data} isLoading={isLoading} />

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
