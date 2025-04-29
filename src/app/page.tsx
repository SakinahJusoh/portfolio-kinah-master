import {ArrowRight} from "lucide-react";
import React from "react";
import type {JSX} from "react";
import Link from "next/link";

export default function FrontPage(): JSX.Element {
  // Navigation menu items
  const navItems = ["About Me", "Skills", "Projects", "Others" ];

  // Portfolio images
  const portfolioImages = [
    {
      src: "/Images/about.jpeg",
      alt: "Whatsapp image",
    },
    {
      src: "/Images/skills.jpg",
      alt: "Element best skillshare",
    },
    {
      src: "/Images/organization.jpeg",
      alt: "Organization",
    },
    {
      src: "/Images/others.jpeg",
      alt: "Others",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center min-h-screen px-4 py-6">
        {/* Navigation Menu */}
        <nav className="w-full max-w-[1440px] flex flex-wrap justify-center gap-x-60 md:gap-x-30 lg:gap-x-24 xl:gap-x-32 text-base md:text-xl lg:text-2xl font-[Inter-Italic] italic text-black mb-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              >
                {item}
              </div> 
          ))}
        </nav>

        {/* Portfolio Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1440px]">
          {portfolioImages.map((image, index) => (
            <img
              key={index}
              className={"w-full h-60 md:h-[400px] object-cover rounded-lg bg-gray-200"}
              alt={image.alt}
              src={image.src}
              />
          ))}
        </div>

        {/* Portfolio Title Section */}
        <div className="flex flex-col items-center text-center mt-12">
          <div className="font-[Aoboshi_One-Regular] text-5xl md:text-7xl text-[#ff009d] tracking-wider ">
            SAKINAH
          </div>
          <div className="font-[Inter-Italic] italic text-xl md:text-3xl text-black mt-2">
            Portfolio
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="w-full mb-20 flex justify-end">
          <Link href="/about">
          <ArrowRight size={50} className="cursor-pointer text-black hover:text-pink-500 transition-colors"/>
          </Link>
        </div>
      </div>
  );
}