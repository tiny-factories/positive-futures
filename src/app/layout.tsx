import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
