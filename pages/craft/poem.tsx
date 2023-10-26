// pages/Poems.tsx

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PoemGenerator from "../../components/PoemGenerator";

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
    <Layout>
      <PoemGenerator />

      {/* Display Poems */}
      <div className="pt-9 w-full">
        <div className="flex flex-wrap border-b-2 border-black">
          <div className="text-standard sm:text-large uppercase">
            Past Poems
          </div>
        </div>
        <div className="py-4 mx-4 border-b-2 flex flex-wrap justify-between justify-center text-small sm:text-standard max-w-md mx-auto">
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
    </Layout>
  );
}
