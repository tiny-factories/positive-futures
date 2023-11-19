import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { storyText } = req.body;

    try {
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: storyText,
      });

      // Convert to Buffer and send the file, or handle as needed
      const buffer = Buffer.from(await mp3.arrayBuffer());
      res.status(200).send(buffer);
    } catch (error) {
      res.status(500).json({ error: "Error generating speech" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
