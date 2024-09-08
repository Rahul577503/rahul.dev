import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./(home)/components/Navbar";
import "@code-hike/mdx/dist/index.css";
import Footer from "./(home)/components/Footer";
import Layout from "./(home)/components/Layout.tsx/Layout";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulmaurya.vercel.app/"),

  title: {
    template: "%s | Rahul Maurya",
    default: "Rahul Maurya",
  },
  authors: {
    name: "Rahul Maurya",
  },
  description:
    "I'm Rahul, a versatile full-stack developer, weaving digital wonders from both frontend and backend realms. Embracing innovation, I craft captivating online experiences with precision and passion.",
  openGraph: {
    title: "Rahul Maurya - Portfolio",
    description:
      "I'm Rahul, a versatile full-stack developer, weaving digital wonders from both frontend and backend realms. Embracing innovation, I craft captivating online experiences with precision and passion.",
    url: "https://rahulmaurya.vercel.app/",
    siteName: "Rahul Maurya",
    images: "/og.svg",
    type: "website",
  },
  keywords: [
    "Rahul Maurya portfolio",
    "rahul maurya vercel.app",
    "rahul577503",
    "Rahul Maurya Varanasi",
    "Rahul Maurya Rahul577503",
    "https://github.com/Rahul577503",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.className} bg-black text-white line-height-[1.5] antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
