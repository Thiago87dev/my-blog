"use client";
import Link from "next/link";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white/70 h-20 shadow-md  sticky top-0 backdrop-blur-2xl transition-colors z-50 ">
      {isMenuOpen ? (
        <>
          <div className=" absolute right-4 top-7" onClick={toggleMenu}>
            <FiX className="text-2xl cursor-pointer" />
          </div>
          <div className="md:hidden flex flex-col bg-white  items-center justify-center text-gray-900 ">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="text-sm uppercase font-semibold py-2 hover:text-black duration-200"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4  h-full ">
          <Logo title="Bloggers" className="text-black" />
          <div className="md:hidden" onClick={toggleMenu}>
            <FiMenu className="text-2xl cursor-pointer" />
          </div>
          <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="text-sm uppercase font-semibold relative group overflow-hidden"
              >
                {item?.title}
                <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
