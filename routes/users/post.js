import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: new Date().getTime() + '@gmail.com',
      name: 'Duong',
    },
  });
  return res.status(200).send(user);
};
