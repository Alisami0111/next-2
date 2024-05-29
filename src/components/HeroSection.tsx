import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";



function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-1 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-gray-900"
        >GB MARKETERS</h1>
        <p 
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Level up your digital collaboration skills with our diverse courses. From mastering SEO to collaborative web development and interface design, our platform offers focused training for enhanced productivity. Learn to optimize websites, collaborate on projects efficiently, and manage content seamlessly. With expert guidance, excel in today's digital landscape
        </p>
        <div className="mt-4">
          <Link href={"/couses"}>
            <Button
            borderRadius="1.75rem"
            className="bd-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
