"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="flex justify-between items-center z-20 px-20 py-4">
          <div>
            <Image src="/images/logo.png" width="100" height="100" alt="logo" />
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem, index) => (
              <a
                key={index}
                className="mx-3 py-5 hover:gradient-border-bottom"
                href="#"
              >
                {navItem}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Book Now!
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <Image
              className={`${isOpen && "hidden"}`}
              src="/icons/icon-hamburger.svg"
              width="20"
              height="20"
              alt=""
            />
            <Image
              className={isOpen ? "block" : "hidden"}
              src="/icons/icon-close.svg"
              width="20"
              height="20"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800
      bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
