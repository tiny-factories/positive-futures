// poemDatabase.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function savePoemToDb(storyData) {
  const savedPoem = await prisma.poem.create({
    data: poemData,
  });
  return savedPoem;
}
