// components/StoryGenerator.js
import Link from "next/link";

import { useState } from "react";

const scenarioArray = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation, and Infrastructure",
  "Reduced Inequality",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice, and Strong Institutions",
  "Partnerships for the Goals",
];

export default function StoryGenerator() {
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [scenario, setScenario] = useState("");
  const [story, setStory] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generateStory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, year, scenario }),
    });

    const data = await response.json();
    setStory(data.story);
  };

  return (
    <div className="">
      <div className="flex  flex-wrap items-center justify-center text-xl mx-auto">
        <div>
          {!story && (
            <div className="">
              {" "}
              <form onSubmit={handleSubmit} className="space-y-4">
                Think of an{" "}
                <input
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  placeholder="occupation"
                  className="m-2 p-2 border-none rounded bg-[#F0EBE3]"
                />
                <br />
                in a
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="place"
                  className="m-2 p-2 border-none rounded bg-[#F0EBE3]"
                />
                <br />
                in
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="year"
                  className="m-2 p-2 border-none rounded bg-[#F0EBE3]"
                />{" "}
                if we ...
                <select
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  className="p-2 border-none rounded bg-[#F0EBE3]"
                >
                  {scenarioArray.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Read a Story
                </button>
              </form>
            </div>
          )}

          {story && <div className="">{story}</div>}
        </div>
      </div>
    </div>
  );
}
