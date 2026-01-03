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
      <main className="pb-16 min-h-screen w-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
