import React from "react";
import prisma from "#/lib/prisma";
import Guestbook from "#/src/components/guestbook";
import {GuestbookTypes} from "#/src/types";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "#/pages/api/auth/[...nextauth]";

const Page = async () => {
  const session = await unstable_getServerSession(authOptions);
  const data = await getData();

  return (
    <div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. It could be anything – appreciation, information, wisdom, or even
          humor. Surprise me!
        </p>
        <Guestbook fallbackData={data?.fallbackData} />
      </div>
    </div>
  );
};

export default Page;

const getData = async (): Promise<{fallbackData: GuestbookTypes[]; revalidate: number}> => {
  const session = await unstable_getServerSession(authOptions);
  console.log("🚀 ~ file: page.tsx:33 ~ getData ~ session", session);

  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  const fallbackData: GuestbookTypes[] = entries?.map((entry: any) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {fallbackData, revalidate: 60};
};
