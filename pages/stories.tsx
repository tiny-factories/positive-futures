// pages/Stories.tsx

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import StoryGenerator from "../components/StoryGenerator";

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

export default function Stories() {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    scenario: "",
  });

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/getStories?date=${filters.date}&location=${filters.location}&scenario=${filters.scenario}`
        );
        const data = await res.json();
        setStories(data);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [filters]);

  return (
    <Layout>
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
        <StoryGenerator />

        {/* Display Stories */}
        <div className="w-full">
          <div className="flex flex-wrap border-b-2 border-black">
            <div className="text-standard sm:text-large uppercase">
              Past Stories
            </div>
          </div>
          <div className="py-4 mx-4 border-b-2 flex flex-wrap justify-between justify-center text-small sm:text-standard max-w-md mx-auto">
            {loading ? (
              <div className="animate-pulse space-y-2">loading ...</div>
            ) : (
              stories.map((story) => (
                <div key={story.id} className="py-9 border-b-2 border-black">
                  <div className="whitespace-pre-line">{story.content}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
