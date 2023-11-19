import OpenAI from "openai";
import { saveToBlobStorage } from "path-to-your-blob-storage-util"; // Replace with actual import

const openai = new OpenAI();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { storyText, storyId } = req.body;

    try {
      const audioResponse = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: storyText,
      });

      const buffer = Buffer.from(await audioResponse.arrayBuffer());
      const audioUrl = await saveToBlobStorage(buffer, `story-${storyId}.mp3`);

      // Update the story with the audio URL (you might need to implement this)
      await updateStoryWithAudioUrl(storyId, audioUrl);

      res.status(200).json({ audioUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error generating or saving speech" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
