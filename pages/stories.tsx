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
      {loading ? (
        <>
          <div className="sticky top-0 bg-tan rounded p-4 text-large col-span-1">
            Loading{" "}
          </div>
          <div className="bg-tan rounded p-4 text-standard whitespace-pre-line col-span-1">
            Loading{" "}
          </div>
        </>
      ) : (
        stories.map((story) => (
          <>
            <div className="sticky top-9 z-10 bg-tan rounded p-4 text-large whitespace-pre-line col-span-1 m-1">
              <div className="">title</div>
              <div className="flex flex-wrap justify-between text-small">
                <div className="">
                  <span className="uppercase">Location</span>
                  {story.location}
                </div>
                <div className="">
                  <span className="uppercase">When</span>
                  {story.date}
                </div>
              </div>
            </div>
            <div className="bg-tan rounded p-4 text-standard whitespace-pre-line col-span-1 m-1">
              {story.content}
            </div>
          </>
        ))
      )}

      <div className="col-span-1">
        <div> Image of story</div>
        <div>Sahre</div>
      </div>

      <div className="col-span-1 min-h-screen"></div>

      <div className="flex flex-wrap">
        {/* Display Stories */}

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
