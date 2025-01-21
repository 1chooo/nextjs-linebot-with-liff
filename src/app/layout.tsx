import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "LIFF App",
  description: "A sample LIFF app using Next.js App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
