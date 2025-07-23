import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      {/* Navbar Top Row */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <h1 className="text-xl font-bold">Local Dishes</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-x-6">
          <a href="#home" className="hover:text-emerald-500">Home</a>
          <a href="#menu" className="hover:text-emerald-500">Menu</a>
          <a href="#about" className="hover:text-emerald-500">About</a>
          <a href="#contact" className="hover:text-emerald-500">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800">
          Get Started
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <IoIosClose
              size={30}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              size={24}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white shadow z-40 flex flex-col items-center gap-y-4 py-6 transition-all duration-100 ease-in-out">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-500"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-500"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-500"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-500"
          >
            Contact
          </a>
          <button className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-800">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
