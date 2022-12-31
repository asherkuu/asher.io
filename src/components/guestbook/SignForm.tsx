"use client";

import {signIn} from "next-auth/react";
import Link from "next/link";
import type {Session} from "next-auth";
import Button from "#/src/components/Controls/Button";
import TextInput from "#/src/components/Controls/TextInput";
import LoadingSpinner from "#/src/components/common/LoadingSpinner";
import ErrorMessage from "#/src/components/common/Message/ErrorMessage";
import SuuccessMessage from "#/src/components/common/Message/SuuccessMessage";
import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";
import Skeleton from "#/src/components/common/Skeleton";

import {Form, FormState} from "#/src/types";

type SignFormProps = {
  sessionStatus: "loading" | "authenticated" | "unauthenticated";
  session: Session | null;
  inputEl: React.Ref<HTMLInputElement>;
  form: FormState;
  onSubmitLeaveEntry: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SignForm: React.FC<SignFormProps> = ({
  sessionStatus,
  session,
  inputEl,
  form,
  onSubmitLeaveEntry,
}) => {
  return (
    <div className="rounded-2xl p-6 mb-8 w-full border border-peri-700 dark:border-peri-200 bg-peri-200 dark:bg-peri-50 shadow-lg">
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
          <form className="relative my-4" onSubmit={onSubmitLeaveEntry}>
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
    </div>
  );
};

export default SignForm;
