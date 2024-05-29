"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Style from "./TestmonialCards.module.css";

const testimonials = [
  {
    quote:
      "Taking the SEO course helped our team boost our website's visibility and significantly improved our search rankings. The insights were invaluable!",
    name: "Linda Brown",
    title: "Marketing Manager",
  },
  {
    quote:
      "The collaborative web development course streamlined our workflow and enhanced our code quality. Now we can make decisions quickly and effectively.",
    name: "Peter Smith",
    title: "Lead Developer",
  },
  {
    quote:
      "The interface design course was a game changer for our team. We learned to collaborate efficiently and maintain consistency across all our projects.",
    name: "Rachel Adams",
    title: "UI/UX Designer",
  },
  {
    quote:
      "The real-time content management course eliminated our version control issues. We can now stay updated and aligned without any interruptions.",
    name: "James Wilson",
    title: "Content Manager",
  },
  {
    quote:
      "The digital marketing strategies course provided us with the latest techniques to grow our business online. The practical tips and expert advice were outstanding.",
    name: "Sophia Davis",
    title: "Business Owner",
  },
];

function TestmonialCards() {
  return (
    <div className="h-[40rem] container1 w-full dark:bg-black dark:bg-grid-white/[0.2]
    relative flex flex-col item-center justify-center overflow-hidden ">
      <h2 
      className="text-3xl font-bold text-center mb-8 z-10">Voices of Sucess</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
    </div>
  );
}

export default TestmonialCards;
