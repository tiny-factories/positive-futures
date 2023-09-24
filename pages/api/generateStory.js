// Import the function from the module
// import { v4 as uuidv4 } from "uuid";
import { saveStoryToDb } from "../../utils/storyDatabase";

const generateStory = async (req, res) => {
  try {
    const { location, year, scenario, occupation } = req.body;

    const message = {
      role: "user",
      content: `There is so much doom and gloom around climate change. Create a short story about climate change where the main character is a ${occupation} living in ${location} in ${year}. The focus should be on how the character adapts to make the best of climate change based on the ${scenario} UN Climate Goal. The overall tone should be realistic but optimistic. I would like the story to be inspirational and hint at humans learning to become better planetary stewards in the future.`,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [message],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    const responseData = await response.json();
    const generatedContent = responseData?.choices?.[0]?.message?.content;

    if (!generatedContent) {
      throw new Error("Failed to generate content from OpenAI.");
    }

    // Save the story directly using the database logic
    const storyData = {
      location,
      date: year,
      scenario,
      text: generatedContent,
    };
    const savedStory = await saveStoryToDb(storyData);

    return res.status(200).json({ story: savedStory });
  } catch (error) {
    console.error("Error generating story:", error);
    return res
      .status(500)
      .json({ error: "Failed to generate and save story." });
  }
};
export default generateStory;
