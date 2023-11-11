// pages/Poems.tsx

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PoemGenerator from "../components/PoemGenerator";

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

  function getRandomPositionClass() {
    const classes = [
      "poem-position-left",
      "poem-position-center",
      "poem-position-right",
    ];
    return classes[Math.floor(Math.random() * classes.length)];
  }

  return (
    <Layout>
      <div className="flex flex-wrap">
        {/* Display Poems */}
        {/* Display Poems */}
        <div className="pt-9 w-full">
          <div className="py-4 mx-4 border-b-2 text-small sm:text-standard">
            {loading ? (
              <div className="animate-pulse space-y-2 justify-center">
                loading ...
              </div>
            ) : (
              poems.map((poem) => (
                <div
                  key={poem.id}
                  className="my-14 p-9 bg-tan rounded-lg max-w-fit"
                >
                  <div className="whitespace-pre-line">{poem.content}</div>
                </div>
              ))
            )}
          </div>
        </div>{" "}
      </div>
    </Layout>
  );
}
