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

function StoryForm({
  location,
  setLocation,
  year,
  setYear,
  scenario,
  setScenario,
  occupation,
  setOccupation,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      Think of an{" "}
      <input
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        placeholder="occupation"
        className="w-full m-2 p-2 border-none rounded bg-[#F0EBE3]"
      />
      <br />
      in a
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="place"
        className="w-full m-2 p-2 border-none rounded bg-[#F0EBE3]"
      />
      <br />
      in
      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="year"
        className="w-full m-2 p-2 border-none rounded bg-[#F0EBE3]"
      />
      <br />
      if we ...
      <select
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        className="w-full p-2 border-none rounded bg-[#F0EBE3]"
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
  );
}

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
    <div className="col-span-2 sm:col-span-1">
      <div className="py-4 mx-4 border-b-2 flex flex-wrap justify-between justify-center text-xl max-w-md mx-auto">
        {!story ? (
          <StoryForm
            location={location}
            setLocation={setLocation}
            year={year}
            setYear={setYear}
            scenario={scenario}
            setScenario={setScenario}
            occupation={occupation}
            setOccupation={setOccupation}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div className="">{story.content}</div>
        )}
      </div>
    </div>
  );
}
