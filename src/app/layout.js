import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Head from "next/head";

// Lazy load components to improve performance
const FireFliesBackground = dynamic(() => import("@/components/FireFliesBackground"), { ssr: false });
const Sound = dynamic(() => import("@/components/Sound"), { ssr: false });

const inter = Inter({
  subsets: ["latin"], // Keep only the required subset
  variable: "--font-inter",
  display: "swap", // Use "swap" to improve performance
});

export const metadata = {
  title: {
    template: "AnishPortfolio | %s",
    default: "AnishPortfolio - A Creative Portfolio",
  },
  description:
    "AnishPortfolio is a creative portfolio showcasing cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Explore modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}