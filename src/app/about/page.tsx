import {Copyright} from "lucide-react";
import React from "react";
import type {JSX} from "react";
import MenuBar from "@/app/components/menu";

    // Personal  information
   const personalInfo = [     
       {label: "Sakinah binti Jusoh"},        
       {label: "Terengganu"},         
       {label: "2 March 2003"},         
       {label: "Internship Student"},
  ];

   // Education information
    const education = [
       {
        institution: "Universiti Malaysia Terengganu",
        period: "2022-Present",
        degree: "Bachelor of Computer Science (Mobile Computing) with Honor",
        image: "/Images/umt.jpg",
        position: "left",
       },
        {
        institution: "Kolej Matrikulasi Pahang",
        period: "2021-2022",
        degree: "Science (Physical Science)",
        image: "/Images/matrik.jpg",
        position: "right"
        },
    ];


export default function AboutMe(): JSX.Element {
    return (
        <div className="bg-white flex flex-col items-center w-full min-h-screen">
            <div className=" w-full max-w-[1430px] relative py-6">

                <MenuBar />

                {/* Vertical Sakinah text */}
                <div className="hidden lg:block absolute h-[168px] top-[80px] left-[20px] -rotate-90 [font-family: 'Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-2xl xl:text-4xl">
                    SAKINAH
                </div>

                
                {/* Vertical line */}
                <div className="w-px h-[1500px] top-0 left-[50px] absolute bg-black"/> 

                {/* Horizontal line */}
                <div className="w-[1500px] h-px top-15 left-0 absolute bg-black"/>


                {/* Main content */}
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                    {/* Profile Image */}
                    <div className="w-full md:w-[300px] ml-30 md:ml-30">
                                <img
                                    className="w-full h-auto object-cover rounded-lg"
                                    alt="Sakinah's profile"
                                    src="/Images/me.jpeg"
                                />
                    </div>

                    {/*  Personal information */}
                    <div className="flex flex-col justify-center text-base md:text-lg lg:text-xl ml-20 md:ml-20">
                        {personalInfo.map((info, index) => (
                            <div 
                                key={index}
                                className="font-family: 'Inter-Medium', Helvetica] mb-2"
                                >
                                    {info.label}
                                </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-center font-['Aoboshi_One-Regular', Helvetica] font-normal text-[#ff009d] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[25.00px] leading-tight">
                    EDUCATION
                </h2>
            </div>


           {/* Education Section */}
            <div className="mt-16 grid grid-cols-1 gap-8">
                 {education.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
                    <img
                         className="w-4/5 h-auto object-cover rounded-lg ml-4 md:ml-16"
                         alt={`${edu.institution} photo`}
                         src={edu.image}
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col items-center text-center px-4">
                            <h2 className="[font-family: 'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl md:text-4xl mb-4">
                            {edu.institution}
                            </h2>
                            <p className="[font-family: 'Inter-Medium',Helvetica] font-medium text-black text-lg md:text-2xl mb-2">
                            {edu.period}
                            </p>
                            <p className="[font-family: 'Inter-Medium',Helvetica] text-black text-lg md:text-2xl">
                            {edu.degree}
                            </p>
                        </div>
                        </div>
             ))}
            </div>


            <div className="w-full max-w-[970px] h-[175px] flex items-center justify-center px-4">
                <h1 className="text-[#ff009d] text-[32px] sm:text-[40px] md:text-[50px] font-normal tracking-[0]  leading-[1.2] text-center [font-family: 'Aoboshi_One-Regular',Helvetica]">
                    WANT TO KNOW MORE ?
                </h1>
            </div>

            {/* Resume Button */}
            <div className="mt-0 flex justify-center">
                <button>
                    <div className="w-full h-auto p-0 font-semibold text-5xl text:black px-8 py-4 rounded-md hover:text-[#ff009d] transition"/>
                        CLICK FOR RESUME !
                    </button>
            </div>

            {/* Footer */}
            <div className="mt-16 flex justify-center items-center">
                <div className="flex items-center gap-2 text-sm md:text-lg [font-family: 'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl text-center">
                    <span>2025 by Sakinah</span>
                    <Copyright className="w-6 h-6" />
                </div>
            </div>
        </div>
    )
}


