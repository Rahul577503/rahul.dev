import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 pb-16 px-4 lg:px-0 max-w-screen-lg mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
