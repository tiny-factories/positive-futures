// pages/story/[id].tsx
import { GetServerSideProps, NextPage } from "next";
import prisma from "../../lib/prisma";
import { Story } from "../../interfaces/story";

interface StoryPageProps {
  story: Story;
}

const StoryPage: NextPage<StoryPageProps> = ({ story }) => {
  const handleTTS = async () => {
    const res = await fetch("/api/text-to-speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ storyText: story.content }),
    });
    const data = await res.json();
    // Play the audio returned from the API
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 md:h-screen">
      <div className="md:sticky top-0 h-auto md:h-screen">Images</div>
      <div className="overflow-auto">
        {/* Audio Player */}
        {story.audioUrl && (
          <div
            key="1"
            className="flex items-center gap-2 p-2 bg-zinc-800 dark:bg-zinc-900 rounded-lg"
          >
            <button
              className="rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-900"
              size="icon"
              variant="ghost"
            >
              svg{" "}
            </button>

            <div className="flex-1 bg-zinc-600 dark:bg-zinc-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between h-10 px-4">
                <audio
                  controls
                  className="w-full h-full text-zinc-50 dark:text-zinc-100"
                >
                  <source src={story.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        )}
        <div>{story.title}</div>
        <div>{story.content}</div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const story = await prisma.story.findUnique({
    where: { id: context.params.id },
  });

  const serializedStory = {
    ...story,
    createdAt: story.createdAt.toISOString(),
  };

  return { props: { story: serializedStory } };
};

export default StoryPage;
