import React from "react";
import MenuBar from "@/components/menu";
import Link from "next/link";
import Footer from "@/components/footer";
import { createClient } from "../../../utils/supabase/server";

// Personal  information
const personalInfo = [
  { label: "Sakinah binti Jusoh" },
  { label: "Terengganu" },
  { label: "2 March 2003" },
  { label: "Internship Student" },
];

interface Iabout {
  title: string;
  date: string;
  description: string;
  image: string;
}

interface Iskill {
  number: number;
  title: string;
  description: string;
}

interface Ipersonal {
  title: string;
  image: string;
  position: string;
}

export default async function AboutMe() {
  const supabase = await createClient();

  const { data: about } = await supabase.from("aboutme").select();
  const { data: skill } = await supabase.from("skills").select();
  const { data: personal } = await supabase.from("personal").select();

  console.log(about, skill, personal);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1430px] relative py-6">
        <MenuBar />

        {/* Vertical Sakinah text */}
        <Link
          href="/"
          className="absolute w-[190px] h-[68px] top-40 left-[-37px] -rotate-90 "
        >
          <div className="[font-family: 'Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-4xl">
            SAKINAH
          </div>
        </Link>

        {/* Vertical line */}
        <div className="w-px h-[3980px] top-0 left-[60px] absolute bg-black" />

        {/* Horizontal line */}
        <div className="w-[1500px] h-px top-18 left-[-40px] absolute bg-black" />

        {/* About me heading */}
        <div className="w-full">
          <div className="text-center font-['Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-4xl sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[25px] mt-20">
            ABOUT ME
          </div>
        </div>

        {/* Main content */}
        <div className="flex mt-8">
          {/* Profile Image */}
          <div className="w-full md:w-[388px] h-[517px] ml-23">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="Sakinah's profile"
              src="/Images/me.jpeg"
            />
          </div>

          {/*  Personal information */}
          <div className="flex flex-col justify-center gap-10 ml-8">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="font-family: 'Inter-Medium', Helvetica] font-medium text-black text-2xl leading-9"
              >
                {info.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className=" pr-10 mb-20">
        <div className=" grid grid-cols-1 gap-6">
          {about?.map((about: Iabout, index) => (
            <div key={index} className="flex flex-row gap-10">
              <div className="w-[500px] h-[370px]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={about.image}
                />
              </div>

              <div className="p-0">
                <div className="flex flex-col gap-4">
                  <h2 className="[font-family: 'Inter-Bold',Helvetica] font-bold text-black text-[28px] leading-[42px]">
                    {about.title}
                  </h2>
                  <p className="[font-family: 'Inter-Medium',Helvetica] font-medium text-black text-2xl leading-9">
                    {about.date}
                  </p>
                  <p className="[font-family: 'Inter-Medium',Helvetica] font-medium text-black text-2xl leading-9">
                    {about.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal line */}
      <div className="w-[1500px] h-px top-390 left-[105px] absolute bg-black" />

      {/* Skills Section */}
      <div className="w-full">
        <div className="text-center font-['Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-4xl sm:text-[48px] md:text-[56px] lg-text-[64px] tracking-[25px] mt-6">
          SKILLS
        </div>

        <div className="flex flex-col gap-8">
          {skill?.map((skill: Iskill, index) => (
            <div key={index} className="flex flex-row items-start gap-4 mt-6">
              <div className="font -['Aoboshi_One-Regular'] font-normal text-[#ff009d] text-[64px] tracking-[32px] leading-[70.4px] text-center w-[55px] ml-40">
                {skill.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-['Inter-Bold'] font-bold text-black text-[28px] leading-[42px]">
                  {skill.title}
                </h3>
                {skill.description && (
                  <div className="font-['Inter-Medium'] font-medium text-[#00000080] text-xl leading-[30px]">
                    {skill.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal line */}
      <div className="w-[1500px] h-px top-600 left-[105px] absolute bg-black" />

      {/* Other Section */}
      <div className="w-full">
        <div className="text-center font-['Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-4xl sm:text-[48px] md:text-[56px] lg-text-[64px] tracking-[25px] mt-36">
          PERSONAL SNAPSHOT
        </div>

        <div className="grid grid-cols-1 gap-2">
          {personal?.map((personal: Ipersonal) => (
            <div
              key={personal.title}
              className={`flex flex-col ${
                personal.position === "left"
                  ? "md:flex-row md:gap-12"
                  : "md:flex-row-reverse md:gap-12"
              }items-center gap-6`}
            >
              <div className="w-[345px] h-[345px] rounded-lg overflow-hidden ml-35 mt-10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${personal.image})` }}
                />
              </div>

              <div className="w-full md:w-1/2 mt-50">
                <div className="font-['Inter-Bold'] font-bold text-black text-[28px] leading-[42px] text-center">
                  {personal.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
