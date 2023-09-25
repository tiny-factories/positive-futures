// pages/api/getStories.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPoems = async (req, res) => {
  const { scenario } = req.query;

  let filter = {};

  if (scenario) filter.scenario = scenario;

  const poems = await prisma.poem.findMany({
    where: filter,
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(poems);
};

export default getPoems;
