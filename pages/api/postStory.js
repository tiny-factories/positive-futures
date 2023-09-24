// pages/api/getStories.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { date, location, scenario } = req.query;

  let filter = {};

  if (date) filter.date = date;
  if (location) filter.location = location;
  if (scenario) filter.scenario = scenario;

  const stories = await prisma.story.findMany({
    where: filter,
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(stories);
};
