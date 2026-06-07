import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="min-h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
