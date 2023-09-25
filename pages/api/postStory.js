// api/postStory.js
import { saveStoryToDb } from "../../utils/storyDatabase";

export default async function postStoryHandler(req, res) {
  try {
    const storyData = req.body;
    const savedStory = await saveStoryToDb(storyData);
    return res.status(200).json(savedStory);
  } catch (error) {
    return res.status(500).json({ error: "Failed to save story." });
  }
}
