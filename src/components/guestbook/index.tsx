"use client";

import React, {useRef, useState} from "react";
import dynamic from "next/dynamic";
import {useSession} from "next-auth/react";
import SignForm from "#/src/components/guestbook/SignForm";
import {useGuestbookMutation, useGuestbookQuery} from "#/src/hooks/query/useGuestbookQuery";
import {Form, FormState, GuestbookTypes} from "#/src/types";

const MessageList = dynamic(() => import("#/src/components/guestbook/MessageList"), {ssr: false});

type GuestbookProps = {
  fallbackData: GuestbookTypes[];
};

const Guestbook: React.FC<GuestbookProps> = ({fallbackData}) => {
  const {data: session, status: sessionStatus} = useSession();
  const inputEl = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>({state: Form.Initial});
  const {isLoading, data} = useGuestbookQuery();
  const mutation = useGuestbookMutation();

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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. It could be anything – appreciation, information, wisdom, or even
          humor. Surprise me!
        </p>
        <SignForm {...SignFormPrpos} />
      </div>

      <MessageList data={data} isLoading={isLoading} />
    </article>
  );
};

export default Guestbook;
