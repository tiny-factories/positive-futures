"use client";

import { useState } from "react";

export default function Poems() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<String>("");

  const prompt = `Q: ${input} Generate a response with less than 200 characters.`;

  const generateResponse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResponse("");
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResponse((prev) => prev + chunkValue);
    }
    setLoading(false);
  };

  return (
    <div className="p-9 w-full h-full">
      {/* <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        maxLength={200}
        className="focus:ring-neu w-full rounded-md border border-neutral-400
         p-4 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900"
        placeholder={"e.g. What is React?"}
      /> */}
      {response && (
        <div className="p-9 bg-[#423e3a] text-white rounded-lg bg-white text-4xl  ">
          {response}
        </div>
      )}
      {!response ? <></> : <div>Share</div>}
      {!loading ? (
        <button
          className="w-full rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-black/80"
          onClick={(e) => generateResponse(e)}
        >
          Generate Response &rarr;
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
