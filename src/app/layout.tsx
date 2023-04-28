import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Poems For Earth",
  description: "Helping humans to identiy them selves as part of nature.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {process.env.UMAMI != "DEVELOPMENT" ? (
          <>
            <title>Poems [PREVIEW]</title>
          </>
        ) : (
          <>
            <title>Poems MFE</title>
          </>
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={`/api/og?title=${metadata.title}`} />
      </Head>
      <script
        async
        defer
        data-website-id="93597ca0-bf3c-4131-96c7-29b105611cc2"
        src="https://umami.tinyfactories.space/umami.js"
      ></script>

      <body>{children}</body>
    </html>
  );
}
