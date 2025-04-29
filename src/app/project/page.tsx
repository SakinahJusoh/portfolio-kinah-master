import React from "react";
import { Copyright } from "lucide-react";
import MenuBar from "@/app/components/menu";
import type {JSX} from "react";

const projects = [
    {
        title: "LIBRARY MANAGEMENT SYSTEM",
        image: "/Images/library.png",
    },
    {
        title: "EASY CALCULATOR",
        image: "/Images/calc.jpeg",
    },
    {
        title: "JOB APPLICATION TRACKING APP",
        image: "/Images/job.jpeg",
    },
    {
        title: "INTERNAL APPLICATION",
        image: "/Images/internal.jpg",
    },
];
export default function Projects(): JSX.Element {
    return (
        <div className="bg-white flex flex-col items-center w-full min-h-screen">
            <div className="w-full max-w-[1430px] relative py-6">

                <MenuBar />

                {/* Vertical Sakinah text */}
                <div className="hidden lg:block absolute h-[168px] top-[80px] left-[20px] -rotate-90 [font-family: 'Aoboshi_One-Regular',Helvetica] font-normal text-[#ff009d] text-2xl xl:text-4xl">
                    SAKINAH
                </div>

                {/* Vertical line */}
                <div className="w-px h-[1500px] top-0 left-[50px] absolute bg-black"/>

                {/* Horizontal line */}
                <div className="w-[1500px] h-px top-15 left-0 absolute bg-black"/>

                {/* Project heading */} 
                <div className="text-center text-[#ff009d] text-4xl sm:text-5xl md:text-6xl font-normal tracking-[10px] [font-family: 'Aoboshi_One-Regular',Helvetica]">
                    PROJECTS
                </div>

                {/* Projects list */}
                <div className="flex flex-col items-center mt-10 space-y-20">
                    {projects.map((project, index) => (
                        <div key={index} className="border-none shadow-none">
                            <div className="flex flex-col items-center p-0">
                                <img
                                src={project.image}
                                className={`object-cover ${index === 3 ? "w-[1146px] h-[544px]" : "w-[300px] h-[657px]"}`}
                                />
                                <h2 className="mt-6 [font-family: 'Inter-Bold',Helvetica] font-bold text-black text-[30px] tracking-[0] leading-[60px] text-center">
                                    {project.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
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