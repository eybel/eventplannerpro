import "@/app/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });
const NEXT_PUBLIC_GOOGLE_TAG_MANAGER =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;

export const metadata = {
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
      <Fragment>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
        />

        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');
              `,
          }}
        />
      </Fragment>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
