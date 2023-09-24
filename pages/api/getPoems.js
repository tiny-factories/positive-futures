// pages/api/getStories.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getStories = async (req, res) => {
  const { location, year, scenario, occupation } = req.query;

  let filter = {};

  // if (year) filter.year = year;
  if (location) filter.location = location;
  if (scenario) filter.scenario = scenario;
  if (occupation) filter.occupation = occupation;

  const stories = await prisma.poems.findMany({
    where: filter,
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(stories);
};

export default getStories;
