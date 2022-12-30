"use client";

import React, {useRef, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import Link from "next/link";
import LoadingSpinner from "#/src/components/common/LoadingSpinner";
import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";
import Skeleton from "#/src/components/common/Skeleton";
import ErrorMessage from "#/src/components/common/Message/ErrorMessage";
import SuuccessMessage from "#/src/components/common/Message/SuuccessMessage";
import {useGuestbookMutation, useGuestbookQuery} from "#/src/hooks/query/useGuestbookQuery";
import {Form, FormState, GuestbookTypes as GuestbookTypesDataType} from "#/src/types";
import TextInput from "#/src/components/Controls/TextInput";
import Button from "#/src/components/Controls/Button";

type GuestbookProps = {
  fallbackData: GuestbookTypesDataType[];
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
        onError: error => {
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

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Sign the Guestbook
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Share a message for a future visitor of my site.
      </p>
      {sessionStatus === "loading" ? (
        <SkeletonContainer>
          <Skeleton className="w-full h-10 rounded-sm my-4" />
        </SkeletonContainer>
      ) : !session ? (
        <Link
          href="/api/auth/signin/github"
          className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          onClick={e => {
            e.preventDefault();
            signIn("github");
          }}
          passHref
        >
          Login
        </Link>
      ) : (
        session?.user && (
          <form className="relative my-4" onSubmit={handleSubmitLeaveEntry}>
            <TextInput
              ref={inputEl}
              id="message"
              className="pl-4 pr-32 py-3 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              aria-label="Your message"
              placeholder="Your message..."
              required
              isOveride
            />
            <Button
              type="submit"
              className="flex items-center justify-center absolute right-2 top-2 px-4 font-medium h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-28"
              label={form.state === Form.Loading ? <LoadingSpinner /> : "Sign"}
            />
          </form>
        )
      )}
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuuccessMessage>{form.message}</SuuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          Your information is only used to display your name and reply by email.
        </p>
      )}
      <div>
        {data?.pages?.map(page =>
          page?.map((item: GuestbookTypesDataType) => (
            <div key={item.id}>
              <p className="">{item.body}</p>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Guestbook;
