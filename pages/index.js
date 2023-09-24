import StoryGenerator from "../components/StoryGenerator";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div className="bg-tan min-h-screen">
      <Navigation /> <StoryGenerator />
    </div>
  );
}
