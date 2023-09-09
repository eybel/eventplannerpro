"use client";

import Blog from "@/components/home/Blog";
import Hero from "@/components/home/Hero";
import Motivation from "@/components/home/Motivation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductsSchema from "@/components/schema";

export default function Home() {
  return (
    <>
      <ProductsSchema />
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full">
          <div className="z-20 w-full h-full bg-no-repeat bg-contain bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation />
      </div>
      <Blog />
      <Footer />
    </>
  );
}
