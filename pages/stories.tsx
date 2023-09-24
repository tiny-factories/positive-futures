// pages/Stories.tsx

import React, { useState, useEffect } from "react";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    scenario: "",
  });

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch(
        `/api/getStories?date=${filters.date}&location=${filters.location}&scenario=${filters.scenario}`
      );
      const data = await res.json();
      setStories(data);
    };

    fetchStories();
  }, [filters]);

  return (
    <div>
      {/* Filter Form */}
      <div>
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
      </div>

      {/* Display Stories */}
      <div>
        {stories.map((story) => (
          <div key={story.id}>
            <h2>
              {story.location} ({new Date(story.date).toLocaleDateString()})
            </h2>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}