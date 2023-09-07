// pages/index.js

import StoryGenerator from "../components/StoryGenerator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <StoryGenerator />
    </div>
  );
}
