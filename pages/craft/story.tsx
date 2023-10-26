// pages/Stories.tsx

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import StoryGenerator from "../../components/StoryGenerator";

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
      <StoryGenerator />
      {/* Display Story */}
      <div className="">
        Story
        {/* <div className="py-4 mx-4 border-b-2 flex flex-wrap justify-between justify-center text-small sm:text-standard max-w-md mx-auto">
          {loading ? (
            <div className="animate-pulse space-y-2">loading ...</div>
          ) : (
            stories.map((story) => (
              <div key={story.id} className="py-9 border-b-2 border-black">
                <div className="whitespace-pre-line">{story.content}</div>
              </div>
            ))
          )}
        </div> */}
      </div>
    </Layout>
  );
}
