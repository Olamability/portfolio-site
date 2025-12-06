import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import abilitydigitalzImg from "../assets/abilitydigitalz.jpg";
import AbImg from "../assets/Ab.jpg";
import AbiImg from "../assets/Abi.jpg";
import CheckoutImg from "../assets/Checkout.jpg";
import SpazrCalc2Img from "../assets/SpazrCalc2.jpg";
import SpazCalcImg from "../assets/SpazCalc.jpg";
import LoginImg from "../assets/Login.jpg";
import CaptureImg from "../assets/Capture.jpg";
import Dipodemy1Img from "../assets/Dipodemy1.jpg";
import Dipodemy2Img from "../assets/Dipodemy2.jpg";
import Dipodemy3Img from "../assets/Dipodemy3.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  tools: string;
  description: string;
  link: string;
  type: "live" | "github" | "case-study";
  images: string[];
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "AbilityDigitalz News Platform",
    category: "WordPress",
    tools: "WordPress",
    description: "A modern news platform built with WordPress delivering optimized content for Nigeria & South Africa and beyond.",
    link: "https://abilitydigitalz.com.ng",
    type: "live",
    images: [abilitydigitalzImg],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "React TypeScript",
    tools: "React, Typescript, Tailwind, Swiper",
    description: "Personal Portfolio built using React, Typescript, Tailwind + Vite.",
    link: "https://abilitydigitalz.com.ng/portfolio",
    type: "live",
    images: [AbImg, AbiImg],
  },
  {
    id: 3,
    title: "SpazCalc",
    category: "Nocode/Lowcode",
    tools: "Flutterflow",
    description: "SpazCalc App built with Flutterflow a no-code/low code tool.",
    link: "",
    type: "github",
    images: [SpazCalcImg, SpazrCalc2Img],
  },
  {
    id: 4,
    title: "magiceSim",
    category: "Nocode/Lowcode",
    tools: "Flutterflow",
    description: "MagiceSIM App built with Flutterflow a no-code/low code tool.",
    link: "https://esimmagic.com/",
    type: "github",
    images: [LoginImg, CaptureImg, CheckoutImg],
  },
  {
    id: 5,
    title: "Dipodemy",
    category: "React Native",
    tools: "React Native, Supabase, Expo",
    description: "Dipodemy is an Online Learning mobile app that connects users with Tech resources, classes and courses.",
    link: "https://expo.dev/preview/update?message=fix%3A+youtube+done&updateRuntimeVersion=1.0.1&createdAt=2025-07-28T15%3A28%3A53.200Z&slug=exp&projectId=4e73b6bd-1669-4aa4-8f1e-861c8d83f8a7&group=7c47bbc3-e0df-41c7-b751-ed98554d6dbe",
    type: "github",
    images: [Dipodemy1Img, Dipodemy2Img, Dipodemy3Img],
  },
];

const ProjectCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const categories: string[] = ["All", ...new Set(allProjects.map((p) => p.category))];
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setClickedCategory(cat);

    const btn = buttonRefs.current[cat];
    if (btn) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    setTimeout(() => setClickedCategory(null), 300);
  };

  useEffect(() => {
    const btn = buttonRefs.current["All"];
    if (btn) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="mt-10">
      {/* Category Filter */}
<div className="flex md:justify-center justify-start overflow-x-auto whitespace-nowrap mb-8 px-4 scroll-smooth snap-x snap-mandatory">
  <div className="inline-flex space-x-3">
    {categories.map((cat) => (
      <button
        key={cat}
        ref={(el) => {
          buttonRefs.current[cat] = el;
        }}
        onClick={() => handleCategoryClick(cat)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 snap-center ${
          selectedCategory === cat
            ? "bg-yellow-500 text-white"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        } ${clickedCategory === cat ? "animate-pulse" : ""}`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>


      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative border rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all group w-80 h-[400px] bg-gray-800"
          >
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="h-44 w-full">
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-44 object-cover cursor-pointer"
                    onClick={() => setModalImage(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-4 flex flex-col justify-between h-[calc(100%-11rem)]">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-center font-semibold hover:bg-yellow-400 transition"
              >
                {project.type === "live"
                  ? "View Site"
                  : project.type === "github"
                  ? "View App"
                  : "Read Case Study"}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={modalImage} alt="Preview" className="max-h-[80vh] max-w-[90vw] rounded shadow-lg" />
            <button
              className="absolute top-4 right-4 text-white text-xl bg-red-600 p-2 rounded-full hover:bg-red-700"
              onClick={() => setModalImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
