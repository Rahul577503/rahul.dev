import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "@code-hike/mdx/dist/index.css";
import Layout from "@/home-components/Layout.tsx/Layout";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulmaurya.vercel.app/"),
  title: {
    template: "%s | Rahul Maurya",
    default: "Rahul Maurya",
  },
  authors: [{ name: "Rahul Maurya", url: "https://rahulmaurya.vercel.app/" }],
  description:
    "I'm Rahul, a versatile full-stack developer, weaving digital wonders from both frontend and backend realms. Embracing innovation, I craft captivating online experiences with precision and passion.",
  openGraph: {
    title: "Rahul Maurya - Portfolio",
    description: "I'm Rahul, a versatile full-stack developer...",
    url: "https://rahulmaurya.vercel.app/",
    siteName: "Rahul Maurya",
    images: ["https://rahulmaurya.vercel.app/img/me.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Rahul Maurya - Portfolio",
    description: "I'm Rahul, a versatile full-stack developer...",
    images: ["https://rahulmaurya.vercel.app/img/me.jpg"],
  },
  keywords: ["Rahul Maurya portfolio", "full-stack developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.className} bg-black text-white antialiased relative`}
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
