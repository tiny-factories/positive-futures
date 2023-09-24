// components/StoryGenerator.js
import Link from "next/link";

import { useState } from "react";

const scenarioArray = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  -"Gender Equality",
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
  const [location, setLocation] = useState("San Francisco");
  const [year, setYear] = useState("2055");
  const [scenario, setScenario] = useState("No Poverty");
  const [story, setStory] = useState("");
  const [occupation, setOccupation] = useState("Urban Planner");

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
      <div className="min-h-screen flex  flex-wrap items-center justify-center text-xl max-w-md mx-auto">
        <div className="w-100">
          We stand at a crossroads, fully aware of the challenges ahead but
          equally equipped with the tools and vision to overcome them. It's time
          to channel our collective curiosity, to explore not just the stars but
          the boundless potential of our own collaborative efforts. With this in
          mind, we present our story generator – not just as a whimsical tool,
          but as a reflection of what we can achieve when we envision and work
          towards a brighter, shared future.
        </div>
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
