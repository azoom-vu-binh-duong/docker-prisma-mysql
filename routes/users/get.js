import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  const users = await prisma.user.findMany();
  console.log("it works")
  console.log(users)
  res.status(200).send(
    users
  );
};
