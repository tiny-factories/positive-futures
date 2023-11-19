// storyDatabase.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function saveStoryToDb(storyData) {
  const savedStory = await prisma.story.create({
    data: storyData,
  });
  return savedStory;
}

export async function updateStoryWithImage(storyId, imageUrl) {
  return prisma.story.update({
    where: { id: storyId },
    data: { imageUrl: imageUrl },
  });
}
