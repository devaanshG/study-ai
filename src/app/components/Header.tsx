"use client"; // Required for React state in Next.js App Router
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full h-20 flex items-center justify-between p-10 text-white fixed bg-black z-50">
        <h1 className="text-2xl font-bold">StudyAI</h1>

        <div className="flex items-center gap-5">
          {/* Menu Icon */}
          <button onClick={toggleMenu} className="hover:text-purple-500">
            <Menu size={24} />
          </button>
          {/* Profile Icon - Conditionally rendered based on session */}
          {children}
        </div>
      </header>

      {/* Full-Screen Navigation Menu */}
      <div
        className={`fixed inset-0 backdrop-blur-lg bg-black text-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 hover:text-purple-500"
        >
          <X size={32} />
        </button>

        {/* Menu Links */}
        <nav>
          <ul className="space-y-8 text-center text-6xl">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-purple-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#plans"
                onClick={toggleMenu}
                className="hover:text-purple-500"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-purple-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
