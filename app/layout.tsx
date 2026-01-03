import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import Layout from "@/home-components/Layout.tsx/Layout";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulmaurya.vercel.app/"),
  title: {
    template: "%s | Rahul Maurya - Full Stack Developer",
    default: "Rahul Maurya - Full Stack Developer Portfolio",
  },
  authors: [
    {
      name: "Rahul Maurya",
      url: "https://rahulmaurya.vercel.app/",
    },
  ],
  description:
    "Rahul Maurya is a skilled full-stack developer creating innovative web solutions. Explore my portfolio showcasing frontend and backend expertise.",
  keywords: [
    "Rahul Maurya",
    "full stack developer",
    "web development portfolio",
    "frontend developer",
    "backend developer",
    "next.js developer",
    "software engineer",
  ],
  openGraph: {
    title: "Rahul Maurya - Full Stack Developer Portfolio",
    description:
      "Portfolio of Rahul Maurya, a full-stack developer crafting innovative web experiences with expertise in frontend and backend technologies.",
    url: "https://rahulmaurya.vercel.app/",
    siteName: "Rahul Maurya Portfolio",
    images: [
      {
        url: "https://rahulmaurya.vercel.app/img/me.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Maurya - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "Rahul Maurya - Full Stack Developer Portfolio",
    description:
      "Portfolio of Rahul Maurya, showcasing full-stack development projects and expertise.",
    images: [
      {
        url: "https://rahulmaurya.vercel.app/img/me.jpg",
        alt: "Rahul Maurya - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rahulmaurya.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${ibmPlexMono.className} bg-background text-foreground antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};
