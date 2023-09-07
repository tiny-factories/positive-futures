// components/StoryGenerator.js

import { useState } from "react";

export default function StoryGenerator() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [scenario, setScenario] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generateStory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, date, scenario }),
    });

    const data = await response.json();
    setStory(data.story);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        Imagine{" "}
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Florida"
          className="w-full p-2 border rounded"
        />{" "}
        on
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />{" "}
        when
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="w-full p-2 border rounded"
        />{" "}
        if we ...
        <select
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="scenario1">Scenario 1</option>
          <option value="scenario2">Scenario 2</option>
          {/* Add more scenarios as needed */}
        </select>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Generate Story
        </button>
      </form>

      {story && <div className="mt-4 p-4 border rounded">{story}</div>}
    </div>
  );
}
