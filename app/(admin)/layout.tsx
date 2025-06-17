import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postify App Sanity Admin Panel",
  description: "Reddit-Style App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
