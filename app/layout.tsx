import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import Navbar from "./(home)/components/Navbar";
import "@code-hike/mdx/dist/index.css";
import Footer from "./(home)/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulmaurya.vercel.app/"),

  title: {
    template: "%s | Rahul Maurya ",
    default: "Rahul Maurya ",
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
    "Rahul Maurya portfolio ",
    "rahul maurya vercel.app",
    "Rahul Maurya Lucknow Institute of Technology",
    "Rahul Maurya Varanasi",
    "Rahul Maurya Rahul577503",
    "Rahul Maurya github",
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
        className={`${spaceGrotesk.className} bg-black  line-height-[1.5] antialiased relative `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
