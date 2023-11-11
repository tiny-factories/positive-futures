// components/PoemGenerator.js
import Link from "next/link";
import { useState, useEffect } from "react";

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

function PoemForm({ scenario, setScenario, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      Think of an{" "}
      <select
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        className="p-2 border-none rounded bg-[#F0EBE3]"
      >
        {scenarioArray.map((item, i) => (
          <option key={i} value={item} className="w-full">
            {item}
          </option>
        ))}
      </select>
      <button className="px-4 py-2 text-white rounded">Craft a Poem</button>
    </form>
  );
}

export default function PoemGenerator() {
  const [scenario, setScenario] = useState("");
  const [poem, setPoem] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generatePoem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scenario }),
    });

    const data = await response.json();
    setPoem(data.poem);
    setCurrentCharIndex(0);
  };

  useEffect(() => {
    let timer;
    if (poem && currentCharIndex < poem.content.length) {
      timer = setTimeout(() => {
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }, 100); // Speed of typing, adjust as needed
    }
    return () => clearTimeout(timer);
  }, [poem, currentCharIndex]);

  return (
    <div className="w-full">
      <div className="text-xl">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <PoemForm
              scenario={scenario}
              setScenario={setScenario}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="col-span-1">
            {!poem ? "Loading" : poem.content.slice(0, currentCharIndex)}
          </div>
        </div>
      </div>
    </div>
  );
}
