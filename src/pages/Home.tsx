import React, { useState } from "react";
import Ogunyankin from "../assets/Ogunyankin.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import "../styles/animatedButton.css";

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-12 px-6 md:px-20 py-12 bg-[#1f2235] text-white">
      {/* LEFT COLUMN */}
      <div className="w-full md:w-[45%] flex flex-col items-center md:items-start relative space-y-6">
        <h1 className="text-2xl md:text-2xl font-bold text-white text-center md:text-left">
          Hi, I'm Olumuyiwa
        </h1>

        <div className="relative">
          <img
            src={Ogunyankin}
            alt="Olumuyiwa"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-tr-3xl rounded-bl-3xl border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-center mt-6 md:mt-8 md:w-72 gap-6">
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white"><FaGithub size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="https://www.linkedin.com/in/olumuyiwa-ogunyankin-2208b6201/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white"><FaLinkedinIn size={20} /></a>
          </div>

          <Link to="/contact" className="cta-btn mt-2 font-semibold">
            <span></span><span></span><span></span><span></span>
            Get-in-touch
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <motion.div
        className="w-full md:w-[35%] mt-2 md:mt-16 text-center md:text-left space-y-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-widest text-sm text-yellow-400">— Introduction</p>

        <motion.h2
          className="text-2xl md:text-3xl font-bold leading-relaxed text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typed
            strings={[
              "Educationist",
              "Digital Designer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop
          />
        </motion.h2>

        {/* Intro Text */}
        <motion.div
          className="space-y-4 text-sm text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            I am a versatile <span className="text-yellow-400 font-medium">Digital Page Designer, Web Developer, and Content Specialist</span> with a strong passion for <span className="text-yellow-400 font-medium">digital storytelling</span> and <span className="text-yellow-400 font-medium">audience-focused product design</span>.
          </p>
          <p>
            My expertise spans <span className="font-bold">WordPress (Elementor & Gutenberg), front-end technologies (React, TypeScript, Tailwind), and mobile app development (React Native & Flutter)</span>.
          </p>
          <p>
            I bring experience in UI/UX design (Figma, Adobe XD), SEO optimization, and automation (Make, Zapier), enabling me to build high-performing, mobile-first platforms.
          </p>
        </motion.div>

        {/* Expanded Text */}
        {showFullText && (
          <motion.div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              Combining journalistic sensibilities with visual design, I create seamless user experiences that enhance engagement and deliver impactful stories across digital platforms.
            </p>
            <p>
              <span className="text-yellow-800 font-medium">
                My goal is to transform ideas into engaging digital experiences that resonate with users and drive results.
              </span>
            </p>
          </motion.div>
        )}

        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-yellow-400 hover:underline font-medium"
        >
          {showFullText ? "Read Less" : "Read More →"}
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
