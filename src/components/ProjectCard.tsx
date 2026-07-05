import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
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
import Vision from "../assets/Vision.png";
import HomeImg from "../assets/Home.png";
import DetailsImg from "../assets/Details.png";

interface Project {
  id: number;
  title: string;
  category: string;
  tools: string;
  description: string;
  link: string;
  type: "live" | "github" | "case-study" | "Demo";
  images: string[];
}

const allProjects: Project[] = [
  {
    id: 7,
    title: "RoyalHomes & Park",
    category: "UI/UX Design",
    tools: "Figma, Mobile Design, Prototyping",
    description: "A high-fidelity unified search mobile app designed to help users effortlessly find and book the perfect residential homes for relocating family members and scenic park spaces for outdoor picnics.",
    link: "https://www.figma.com/proto/xHou0dZMrZ3oCHMtXvlrup/ShopMore?node-id=4282-605&p=f&t=SThd8hosyc84Bodn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    type: "github",
    images: [HomeImg, DetailsImg],
  },
  {
    id: 1,
    title: "VisionFinance Website",
    category: "Frontend Development",
    tools: "React, TypeScript, Tailwind CSS",
    description: "Modern Personal Finance Dashboard (React/Vue). Interactive dashboard that visually summarizes income, expenses, and savings goals.",
    link: "https://vision-finance.vercel.app/",
    type: "Demo",
    images: [Vision],
  },
  {
    id: 2,
    title: "AbilityDigitalz News Platform",
    category: "Web Development",
    tools: "WordPress, SEO, Performance Optimization",
    description: "A modern news platform built with WordPress delivering optimized content for Nigeria & South Africa. Implemented custom themes, SEO strategies, and performance enhancements for fast loading times.",
    link: "https://abilitydigitalz.com.ng",
    type: "live",
    images: [abilitydigitalzImg],
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    tools: "React, TypeScript, Tailwind CSS, Framer Motion",
    description: "A modern, responsive portfolio built with React and TypeScript featuring smooth animations, dark mode support, and optimized performance. Showcases my work with an emphasis on clean UI/UX design.",
    link: "https://devability.vercel.app/",
    type: "live",
    images: [AbImg, AbiImg],
  },
  {
    id: 4,
    title: "Dipodemy Learning Platform",
    category: "Mobile App Development",
    tools: "React Native, Supabase, Expo",
    description: "An online learning mobile app connecting users with tech resources, classes, and courses. Features real-time data sync, video integration, and a beautiful, intuitive interface designed for seamless learning experiences.",
    link: "https://expo.dev/preview/update?message=fix%3A+youtube+done&updateRuntimeVersion=1.0.1&createdAt=2025-07-28T15%3A28%3A53.200Z&slug=exp&projectId=4e73b6bd-1669-4aa4-8f1e-861c8d83f8a7&group=7c47bbc3-e0df-41c7-b751-ed98554d6dbe",
    type: "github",
    images: [Dipodemy1Img, Dipodemy2Img, Dipodemy3Img],
  },
  {
    id: 5,
    title: "MagiceSIM App",
    category: "UI/UX Design",
    tools: "Figma, FlutterFlow, Mobile Design",
    description: "A beautifully designed eSIM marketplace app built with FlutterFlow. Focused on creating an intuitive user experience for purchasing and managing eSIMs with modern UI patterns and smooth interactions.",
    link: "https://esimmagic.com/",
    type: "github",
    images: [LoginImg, CaptureImg, CheckoutImg],
  },
  {
    id: 6,
    title: "SpazCalc Calculator App",
    category: "Mobile App Development",
    tools: "FlutterFlow, Mobile UI Design",
    description: "A feature-rich calculator app with a clean, modern interface. Demonstrates proficiency in no-code/low-code development while maintaining high design standards and user experience principles.",
    link: "#",
    type: "github",
    images: [SpazCalcImg, SpazrCalc2Img],
  },
];

const ProjectCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(-1);

  const handlePrevImage = () => {
    if (!modalProject) return;
    setModalImageIndex((prev) => (prev > 0 ? prev - 1 : modalProject.images.length - 1));
  };

  const handleNextImage = () => {
    if (!modalProject) return;
    setModalImageIndex((prev) => (prev < modalProject.images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalProject) return;
      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        setModalProject(null);
        setModalImageIndex(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalProject, modalImageIndex]);

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
      <div className="flex md:justify-center justify-start overflow-x-auto whitespace-nowrap mb-12 px-4 scroll-smooth snap-x snap-mandatory">
        <div className="inline-flex space-x-3 bg-gray-900/50 p-2 rounded-full backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              ref={(el) => {
                buttonRefs.current[cat] = el;
              }}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 snap-center ${selectedCategory === cat
                  ? "bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/50 scale-105"
                  : "bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
                } ${clickedCategory === cat ? "animate-pulse" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative border border-gray-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group w-full max-w-sm bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image Carousel */}
            <div className="relative overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-56 w-full"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                        onClick={() => {
                          setModalProject(project);
                          setModalImageIndex(i);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-60">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-yellow-400 font-medium mb-3 uppercase tracking-wide">
                  {project.tools}
                </p>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-3 rounded-xl text-center font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {project.type === "live"
                  ? "View Live Site"
                  : project.type === "github"
                    ? "View Project"
                    : "Demo"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {modalProject && modalImageIndex >= 0 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm cursor-zoom-out"
          onClick={() => {
            setModalProject(null);
            setModalImageIndex(-1);
          }}
        >
          <div className="relative max-w-6xl w-full mx-4 flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            
            {/* Image Preview & Indicator */}
            <div className="relative max-h-[85vh] flex flex-col items-center select-none">
              <img
                src={modalProject.images[modalImageIndex]}
                alt={`Preview of ${modalProject.title}`}
                className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl object-contain"
              />
              {modalProject.images.length > 1 && (
                <div className="mt-4 bg-gray-900/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm shadow-md">
                  {modalImageIndex + 1} / {modalProject.images.length}
                </div>
              )}
            </div>

            {/* Left Control Arrow */}
            {modalProject.images.length > 1 && (
              <button
                className="absolute left-4 md:-left-16 text-white bg-gray-900/60 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-lg hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Control Arrow */}
            {modalProject.images.length > 1 && (
              <button
                className="absolute right-4 md:-right-16 text-white bg-gray-900/60 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-lg hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white bg-red-500 p-2.5 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg hover:scale-110"
              onClick={() => {
                setModalProject(null);
                setModalImageIndex(-1);
              }}
              aria-label="Close preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
