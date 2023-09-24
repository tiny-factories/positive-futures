// Import the function from the module
// import { v4 as uuidv4 } from "uuid";
import { savePoemToDb } from "../../utils/poemDatabase";

const generatePoem = async (req, res) => {
  try {
    const { scenario } = req.body;

    const message = {
      role: "user",
      content: `create a poem about planet earth in 50 words`,
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

    // Save the poem directly using the database logic
    const poemData = {
      scenario,
      content: generatedContent,
    };
    const savedPoem = await savePoemToDb(poemData);

    return res.status(200).json({ poem: savedPoem });
  } catch (error) {
    console.error("Error generating poem:", error);
    return res.status(500).json({ error: "Failed to generate and save poem." });
  }
};
export default generatePoem;
