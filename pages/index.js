import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(ref.current);

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);
  return (
    <Layout>
      <div className="bg-light dark:bg-dark rounded col-span-1 my-2 mx-1 p-4">
        <div
          ref={ref}
          className={`transition ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
        >
          We stand at a crossroads, fully aware of the challenges ahead but
          equally equipped with the tools and vision to overcome them. It&apos;s
          time to channel our collective curiosity, to explore not just the
          stars but the boundless potential of our own collaborative efforts.
          With this in mind, we present our story generator – not just as a
          whimsical tool, but as a reflection of what we can achieve when we
          envision and work towards a brighter, shared future.
        </div>
      </div>

      <div className="col-span-1">
        <Link href="/craft/story">
          <div className="bg-light dark:bg-dark hover:bg-dark dark:hover:bg-light min-h-1/2 rounded my-2 mx-1 p-4">
            <div>📖</div>
            <div>Creaft a Story</div>
          </div>
        </Link>
        <Link href="/craft/poem">
          <div className="my-2 bg-light dark:bg-dark hover:bg-dark dark:hover:bg-light min-h-1/2 rounded my-2 mx-1 p-4">
            <div>📄</div>
            <div>Crafe a poem</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
