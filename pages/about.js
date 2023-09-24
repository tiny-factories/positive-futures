import StoryGenerator from "../components/StoryGenerator";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="bg-tan min-h-screen">
      <Navigation />
      <div className="py-4 mx-4 flex flex-wrap justify-between justify-center text-xl max-w-md mx-auto">
        We stand at a crossroads, fully aware of the challenges ahead but
        equally equipped with the tools and vision to overcome them. It&apos;s
        time to channel our collective curiosity, to explore not just the stars
        but the boundless potential of our own collaborative efforts. With this
        in mind, we present our story generator – not just as a whimsical tool,
        but as a reflection of what we can achieve when we envision and work
        towards a brighter, shared future.
      </div>
    </div>
  );
}
