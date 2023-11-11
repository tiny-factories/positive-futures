import Head from "next/head";
import Navigation from "./Navigation";

import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [ogData, setOgData] = useState({});

  useEffect(() => {
    async function fetchOgData() {
      try {
        const response = await fetch("/api/og");
        if (response.ok) {
          const data = await response.json();
          setOgData(data);
        }
      } catch (error) {
        console.error("Error fetching OG data:", error);
      }
    }

    fetchOgData();
  }, []);

  return (
    <div className="bg-dark grid grid-rows-[auto,1fr] min-h-screen">
      <script
        async
        defer
        data-website-id="93597ca0-bf3c-4131-96c7-29b105611cc2"
        src="https://umami.tinyfactories.space/umami.js"
      ></script>
      <Head>
        <title>Positive Futures</title>
        <meta
          property="og:title"
          content={ogData.title || "Positive Futures"}
        />
        <meta
          property="og:description"
          content={
            ogData.description ||
            "We stand at a crossroads, fully aware of the challenges ahead but equally equipped with the tools and vision to overcome them. It's time to channel our collective curiosity, to explore not just the stars but the boundless potential of our own collaborative efforts. With this in mind, we present our story generator – not just as a whimsical tool, but as a reflection of what we can achieve when we envision and work towards a brighter, shared future."
          }
        />
        <meta
          property="og:image"
          content={ogData.image || "https://example.com/default-og-image.jpg"}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* Add other OG tags as needed */}
      </Head>

      <Navigation />
      {children}
    </div>
  );
}
