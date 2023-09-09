"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = ["Home", "EventPlanner", "Pricing", "Contact Us"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white">
        <nav className="z-20 flex items-center justify-between px-20 py-4">
          <div>
            <Image src="/images/logo.png" width="100" height="100" alt="logo" />
          </div>

          <div className="hidden text-sm lg:block text-neutral-grayish-blue">
            {navItems.map((navItem, index) => (
              <a
                key={index}
                className="py-5 mx-3 hover:gradient-border-bottom"
                href="#"
              >
                {navItem}
              </a>
            ))}
          </div>

          <button className="hidden py-3 text-xs rounded-full lg:block bg-primary-lime-green px-7 text-neutral-white bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
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
        <div className="flex flex-col py-4 mx-5 my-20 text-center bg-white rounded text-primary-dark-blue">
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
