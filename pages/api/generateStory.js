// pages/api/generateStory.js

export default async (req, res) => {
  const { location, date, scenario } = req.body;
  const prompt = `Write a short story based on location: ${location}, date: ${date}, and scenario: ${scenario}.`;

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
