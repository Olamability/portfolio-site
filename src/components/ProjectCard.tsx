import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import abilitydigitalzImg from "../assets/abilitydigitalz.jpg";
// import spazcalcImg from "../assets/SpazCalc.PNG";

interface Project {
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
    title: "AbilityDigitalz News Platform",
    category: "WordPress",
    tools: "WordPress",
    description:
      "A modern news platform delivering optimized content for Nigeria & South Africa.",
    link: "https://abilitydigitalz.com.ng",
    type: "live",
    images: [
      abilitydigitalzImg
    ],
  },
  {
    title: "Personal Portfolio",
    category: "React TypeScript",
    tools: "React, Typescript, Tailwind, Swiper",
    description: "My Personal Portfolio.",
    link: "https://yourdomain.com/eduhub",
    type: "live",
    images: ["/images/Ab.PNG", "/images/Abi.PNG"],
  },
  {
    title: "SpazCalc",
    category: "Nocode/Lowcode",
    tools: "Flutterflow",
    description:
      "SpazCalc is a no-code calculator app built with Flutterflow.",
    link: "https://yourdomain.com/seo-case",
    type: "case-study",
    images: ["/images/SpazCalc.PNG", "/images/SpazrCalc2.PNG"],
  },
   {
    title: "magiceSim",
    category: "Nocode/Lowcode",
    tools: "Flutterflow",
    description:
      "SpazCalc is a no-code calculator app built with Flutterflow.",
    link: "https://yourdomain.com/seo-case",
    type: "case-study",
    images: ["/images/Login.PNG", "/images/Capture.PNG", "/images/Checkout.PNG"],
  },
  {
    title: "Dipodemy",
    category: "React Native",
    tools: "React Native, Supabase, Expo",
    description:
      "Dipodemy is a mobile app that connects users with Tech resources and courses.",
    link: "https://expo.dev/preview/update?message=fix%3A+youtube+done&updateRuntimeVersion=1.0.1&createdAt=2025-07-28T15%3A28%3A53.200Z&slug=exp&projectId=4e73b6bd-1669-4aa4-8f1e-861c8d83f8a7&group=7c47bbc3-e0df-41c7-b751-ed98554d6dbe",
    type: "github",
    images: ["/images/Dipodemy1.jpg", "/images/Dipodemy2.jpg", "/images/Dipodemy3.jpg"],
  },
];

const ProjectCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const categories = ["All", ...new Set(allProjects.map((p) => p.category))];
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="mt-10">
      {/* Category Filter */}
      <div className="flex justify-center overflow-x-auto whitespace-nowrap mb-8 px-2">
        <div className="inline-flex space-x-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative border rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all group w-80 h-[400px] bg-gray-800"
          >
            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-44 w-full"
            >
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

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-[calc(100%-11rem)]">
              <h3 className="text-lg font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                {project.description}
              </p>
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
            <img
              src={modalImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
            />
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
