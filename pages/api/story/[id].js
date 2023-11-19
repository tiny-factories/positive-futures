import prisma from "../../../lib/prisma";

export const getServerSideProps = async (context) => {
  const story = await prisma.story.findUnique({
    where: { id: context.params.id },
  });

  return { props: { story } };
};
