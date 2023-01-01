import type {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/react";
import prisma from "lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = Number(req.query.page);
  const lastId = req.query.lastId || null;

  if (req.method === "GET") {
    const entries = await prisma.guestbook.findMany({
      take: 20,
      skip: lastId ? 1 : 0,
      ...(lastId && {cursor: {id: Number(lastId)}}),
      orderBy: {
        updated_at: "desc",
      },
    });

    return res.send({
      body: entries.map((entry: any) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      })),
      page,
    });
  }

  const session = await getSession({req});
  const {email, name} = session?.user as {email: string; name: string};

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || "").slice(0, 500),
        created_by: name,
      },
    });

    return res.status(200).send({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    });
  }

  return res.send("Method not allowed.");
}
