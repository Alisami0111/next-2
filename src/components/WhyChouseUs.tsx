"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolcontent = [
    {
      title: "Master Every Aspect of SEO",
      description:
        "Collaborate in real-time with your team, clients, and stakeholders to optimize your website for search engines. Enhance your site's visibility, share ideas, and make data-driven decisions quickly. Our platform streamlines your SEO workflow, boosting your productivity and search rankings.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black text-3xl">
         SEO
        </div>
      ),
    },
    {
      title: "Collaborative Web Development",
      description:
        "Work together in real-time with your team, clients, and stakeholders on your web development projects. Collaborate on code, share ideas, and make decisions quickly. With our platform, you can streamline your development workflow, enhance your code quality, and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-black text-3xl">
         Web Development
        </div>
      ),
    },
    {
      title: "Collaborative Interface Design",
      description:
        "Work together in real-time with your team, clients, and stakeholders on your interface design projects. Collaborate on design elements, share ideas, and make decisions quickly. With our platform, you can streamline your design process, ensure consistency, and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black text-3xl">
          Interface Design
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black text-3xl">
         Content Writting
        </div>
      ),
    },
  ];


function WhyChouseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolcontent} />
    </div>
  )
}

export default WhyChouseUs