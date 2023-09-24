// pages/api/generateStory.js
// This pages POSTs data to OpenAI

export default async (req, res) => {
  const { location, year, scenario, occupation } = req.body;
  const prompt = `There is so much doom and gloom around climate change. Create a short story about climate change where the main character is a ${occupation} living in ${location} in ${year}. The focus should be on how the character adapts to make the best of climate change based on the ${scenario}UN Cliamte Goal. The overall tone should be realistic but optimistic. I would like the story to be inspirational and hint at humans learning to become better planetary stewards in the future.`;

  const response = await fetch(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 150,
      }),
    }
  );

  const data = await response.json();
  return res.status(200).json({ story: data.choices[0].text.trim() });
};
