import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });
const NEXT_PUBLIC_GOOGLE_TAG_MANAGER =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;

export const metadata = {
  metadataBase: new URL("https://www.eventplanner.com"),
  title: "Event Planner",
  description: "Generated for Event Planner",
  viewport: "width=device-width, initial-scale=1.0",
  author: "Event Planner Pro",
  openGraph: {
    title: "Your Page Title",
    description: "Event Planner Pro is......",
    type: "website",
    url: "http://localhost:3000",
    image: "eventplanner-url",
    siteName: "EventPlanner Pro",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitterGraph: {
    title: "Your Page Title",
    card: "image_here",
    description: "Event Planner Pro is......",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Fragment></Fragment>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
