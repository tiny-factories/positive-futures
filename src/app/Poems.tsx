"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Poems() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<String>("");

  // const prompt = `Q: ${input} Generate a response with less than 200 characters.`;

  const prompt = `Q: Generate a response with less than 50 characters.`;

  useEffect(() => {
    generateResponse();
  }, []);

  const handleDownload = () => {
    const url = URL.createObjectURL(
      new Blob([response.toString()], { type: "text/plain" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "response.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateResponse = async () => {
    // e.preventDefault();
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
    <div className="flex flex-1 flex-col justify-center px-2">
      <div className="p-2 min-h-1/2 rounded bg-[#EEEDE6]">
        <div className="p-3 h-5/6">
          {response && (
            <div className="font-bold text-2xl text-[#423E3A]">{response}</div>
          )}
          <div className="py-3 flex flex flex-wrap justify-between">
            <div
              className="grow border-2 border-[#423E3A] rounded text-[#423E3A] text-center text-lg hover:bg-[#423E3A] hover:text-[#EEEDE6] p-2"
              onClick={() => generateResponse()}
            >
              􁉢 Generate Poem
            </div>
            <button
              className="grow sm:grow-0 border-2 border-[#423E3A] rounded text-[#423E3A] text-center text-lg hover:bg-[#423E3A] hover:text-[#EEEDE6] sm:ml-9 p-2 disabled:text-[#D4D3CC] disabled:border-[#D4D3CC]"
              disabled={loading}
              onClick={handleDownload}
            >
              􀈄 Download
            </button>
            {/* <button
              className="grow sm:grow-0 border-2 border-[#423E3A] rounded text-[#423E3A] text-center text-lg hover:bg-[#423E3A] hover:text-[#EEEDE6] sm:ml-9 p-2 disabled:text-[#D4D3CC] disabled:border-[#D4D3CC]"
              disabled={loading}
              onClick={handleDownload}
            >
              􀈂 Share
            </button> */}
          </div>
        </div>
      </div>

      {/* <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        maxLength={200}
        className="focus:ring-neu w-full rounded-md border border-neutral-400
         p-4 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900"
        placeholder={"e.g. What is React?"}
      /> */}

      {!loading ? <div></div> : <div></div>}
    </div>
  );
}
