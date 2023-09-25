import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="pb-16 pt-20 text-center lg:pt-32">
        <div className="mx-auto max-w-4xl tracking-tight text-hero">
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
              className="rounded-md border-2 border-black px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:bg-black duration-100"
            >
              Create Story
            </button>
          </Link>
          <Link href="/poems">
            <button
              type="button"
              className="rounded-md border-2 border-black px-3.5 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:bg-black duration-100"
            >
              Create Poem
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
