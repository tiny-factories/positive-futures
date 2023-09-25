import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="pb-16 pt-20 text-center lg:pt-32">
        <div className="mx-auto max-w-4xl font-display  font-medium tracking-tight text-2xl">
          We stand at a crossroads, fully aware of the challenges ahead but
          equally equipped with the tools and vision to overcome them. It&apos;s
          time to channel our collective curiosity, to explore not just the
          stars but the boundless potential of our own collaborative efforts.
          With this in mind, we present our story generator – not just as a
          whimsical tool, but as a reflection of what we can achieve when we
          envision and work towards a brighter, shared future.
        </div>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link href="/stories">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Story
            </button>
          </Link>
          <Link href="/poems">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Poem
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
