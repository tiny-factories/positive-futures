// pages/Poems.tsx

import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

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

export default function Poems() {
  const [loading, setLoading] = useState(false);
  const [poems, setPoems] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    scenario: "",
  });

  useEffect(() => {
    const fetchPoems = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/getPoems?date=${filters.date}&location=${filters.location}&scenario=${filters.scenario}`
        );
        const data = await res.json();
        setPoems(data);
      } catch (error) {
        console.error("Failed to fetch poems:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoems();
  }, [filters]);

  return (
    <div className="bg-tan min-h-screen">
      <Navigation />
      <div className="flex flex-wrap">
        {/*<div className="">
          <input
            type="date"
            value={filters.date}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, date: e.target.value }))
            }
          />
          <input
            value={filters.location}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="Filter by Location"
          />
          <select
            value={filters.scenario}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, scenario: e.target.value }))
            }
          >
            <option value="">All Scenarios</option>
            <option value="scenario1">Scenario 1</option>
            <option value="scenario2">Scenario 2</option>
          </select>
        </div>*/}

        {/* Display Poems */}
        <div className="py-4 mx-4 border-b-2 flex flex-wrap justify-between justify-center text-xl max-w-md mx-auto">
          {loading ? (
            <div className="animate-pulse space-y-2">loading ...</div>
          ) : (
            poems.map((poem) => (
              <div key={poem.id} className="py-9 border-b-2 border-black">
                <div className="whitespace-pre-line">{poem.content}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
