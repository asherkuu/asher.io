import React from "react";
import prisma from "#/lib/prisma";
import Guestbook from "#/src/components/guestbook";
import {GuestbookTypes} from "#/src/types";

const Page = async () => {
  const data = await getData();

  return <Guestbook fallbackData={data?.fallbackData} />;
};

export default Page;

const getData = async (): Promise<{fallbackData: GuestbookTypes[]; revalidate: number}> => {
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
