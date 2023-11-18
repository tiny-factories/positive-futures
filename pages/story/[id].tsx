// pages/story/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import prisma from '../../lib/prisma'; // Import your Prisma client
import { Story } from '../../interfaces/story'; // Assuming you have defined a Story type

interface StoryPageProps {
  story: Story;
}

const StoryPage: NextPage<StoryPageProps> = ({ story }) => {
  return (
	<div className='grid grid-cols-2 gap-4'>
		<div className=''>and iamge</div>
		<div className=''>
			<div className=''>
			{story.title}
			</div>
			<div className=''>
				{story.content}
</div>
</div>
	</div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const story = await prisma.story.findUnique({
	where: { id: context.params.id },
  });

  // Convert Date objects to strings
  const serializedStory = {
	...story,
	createdAt: story.createdAt.toISOString(),
	// Convert other Date fields if they exist
  };

  return { props: { story: serializedStory } };
};

export default StoryPage;
