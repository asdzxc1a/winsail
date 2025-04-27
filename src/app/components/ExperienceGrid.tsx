"use client";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  image: string;
  title: string;
  link: string;
}

const experiences: Experience[] = [
  { image: "/exp1.jpg", title: "Wave Riding", link: "/experience/wave" },
  { image: "/exp2.jpg", title: "Freestyle", link: "/experience/freestyle" },
  { image: "/exp3.jpg", title: "Slalom", link: "/experience/slalom" },
  // Add more as needed
];

export default function ExperienceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.title} {...exp} />
      ))}
    </div>
  );
}
