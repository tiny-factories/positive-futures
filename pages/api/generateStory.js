// Import the function from the module
// import { v4 as uuidv4 } from "uuid";
import { saveStoryToDb, updateStoryWithImage } from "../../utils/storyDatabase";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
const blobEndpoint = `${baseUrl}/api/uploadImage`;

async function generateImageWithDalle(prompt) {
  // Replace with actual DALL-E API endpoint
  const dalleEndpoint = "https://api.openai.com/v1/dalle-generate-endpoint";

  const response = await fetch(dalleEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt /* other necessary parameters */ }),
  });

  const responseData = await response.json();
  // Assuming responseData contains the image data
  return responseData.imageData; // Adjust based on actual response structure
}

// Function to upload image to blob storage and return the URL
async function uploadImageToBlob(imageData) {
  // Replace with your blob storage API endpoint

  const response = await fetch(blobEndpoint, {
    method: "POST",
    headers: {
      // Any necessary headers
    },
    body: imageData, // The image data received from DALL-E
  });

  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  const result = await response.json();
  return result.url; // Assuming result contains the URL of the uploaded image
}

export default async function generateStory(req, res) {
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
      content: generatedContent,
    };
    const savedStory = await saveStoryToDb(storyData);

    // Image generation and upload logic
    const imagePrompt = `An image representing ${scenario}`;
    const imageData = await generateImageWithDalle(imagePrompt);
    const imageUrl = await uploadImageToBlob(imageData);

    // Update the story with the image URL
    const updatedStory = await updateStoryWithImage(savedStory.id, imageUrl);

    return res.status(200).json({ story: updatedStory });
  } catch (error) {
    console.error("Error in story/image generation:", error);
    return res.status(500).json({ error: "Failed in the process." });
  }
}
