"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// react icons
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

// next image
import logo from "@/public/Riding-Assets/logo.png";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (href) => pathname === href;

  const navClasses = (active) =>
    `flex items-center cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ${
      active
        ? "bg-green-500 text-black underline text-green-800"
        : hasScrolled
        ? "text-black hover:text-[#fff] hover:bg-[linear-gradient(to_top,_#454545,_#393939,_#2d2d2d,_#212121,_#161616,_#191919,_#1c1c1c,_#1f1f1f,_#323232,_#454545,_#5a5a5a,_#707070)]"
        : "text-black hover:text-[#fff] hover:bg-[linear-gradient(to_top,_#454545,_#393939,_#2d2d2d,_#212121,_#161616,_#191919,_#1c1c1c,_#1f1f1f,_#323232,_#454545,_#5a5a5a,_#707070)]"
    }`;

  return (
    <main
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isMobile || hasScrolled
          ? "bg-[#d3eef9] shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/home1" className="flex items-center gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              {NAV_ITEMS.map(({ name, href }, index) => (
                <li key={index} className="relative group">
                  <Link href={href} className={navClasses(isActive(href))}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <div className="flex items-center gap-20">
              <div className="flex items-center gap-5">
                <button className="uppercase text-sm">Log in</button>
                <button
                  className="uppercase px-3 py-2 rounded-md text-sm text-white"
                  style={{
                    background:
                      "linear-gradient(to right top, #a88050, #845a43, #5b3b34, #302020, #000000)",
                  }}
                >
                  Register
                </button>
              </div>
              <div className="hidden md:block">
                <FaSearch className="text-3xl text-[#ffff]" />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#000] focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <IoMdMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map(({ name, href }, index) => (
            <li key={index} className="block">
              <Link
                href={href}
                className={`flex items-center ${
                  isActive(href)
                    ? "bg-green-500 text-black"
                    : "text-gray-700 hover:text-[#357960]"
                } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Menubar;
