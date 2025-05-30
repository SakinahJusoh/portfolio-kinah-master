import React from "react";
import MenuBar from "@/components/menu";
import Link from "next/link";
import Footer from "@/components/footer";
import { createClient } from "../../../utils/supabase/client";

interface Iproject {
  title: string;
  image: string;
  description: string;
}

export default async function Projects() {
  const supabase = await createClient();
  const { data: project } = await supabase.from("project").select();

  console.log(project);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1430px] relative py-6">
        <MenuBar />

        {/* Vertical Sakinah text */}
        <Link
          href="/"
          className=" absolute w-[190px] h-[68px] top-40 left-[-37px] px] -rotate-90 "
        >
          <div className="[font-family: 'Aoboshi_One-Regular',Helvetica] font-normal text-[#ff009d] text-4xl">
            SAKINAH
          </div>
        </Link>

        {/* Vertical line */}
        <div className="w-px h-[3800px] top-0 left-[60px] absolute bg-black" />

        {/* Horizontal line */}
        <div className="w-[1500px] h-px top-18 left-[-40px] absolute bg-black" />

        {/* Project heading */}
        <div className="w-full">
          <div className="text-center font-['Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-4xl sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[25px] mt-20">
            PROJECTS
          </div>
        </div>

        {/* Projects list */}
        <div className="flex flex-col items-center mt-10 space-y-20">
          {project?.map((project: Iproject, index) => (
            <div
              key={index}
              className="w-full max-w-[969px] mb-[50px] border-none shadow-none"
            >
              <div className="flex flex-col items-center p-0">
                <img
                  src={project.image}
                  className={`object-cover mb-8 ${
                    project.image === "/Images/internal.jpg"
                      ? "w-[960px] h-[350px]"
                      : "w-[222px] h-[466px]"
                  }`}
                />
                <h2 className="w-full max-w-[810px] [font-family:'Inter-Bold', Helvetica] font-bold text-black text-4xl text-center tracking-[0] leading-[72px] mb-2">
                  {project.title}
                </h2>
                <h3 className="w-full max-w-[794px] [font-family:'Inter-Medium', Helvetica] font-medium text-black text-[28px] text-center tracking-[0] leading-[48px] mb-14">
                  {project.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
