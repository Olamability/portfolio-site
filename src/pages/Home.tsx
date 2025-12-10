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
              "Teacher",
              "UI/UX Designer",
              "Frontend Developer",
              "Mobile App Developer",
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
            I am a <span className="text-yellow-400 font-medium">Teacher, UI/UX Designer, Frontend Developer, and Mobile App Developer</span> who specializes in creating <span className="text-yellow-400 font-medium">intuitive digital experiences</span> that combine beautiful design with powerful functionality.
          </p>
          <p>
            My expertise includes <span className="font-bold">UI/UX design (Figma, Adobe XD), frontend development (React, TypeScript, Tailwind CSS), and mobile app development (React Native, Flutter, FlutterFlow)</span> — enabling me to design and build complete digital solutions from concept to deployment.
          </p>
          <p>
            I focus on creating <span className="text-yellow-400 font-medium">user-centered designs</span> and implementing them with clean, scalable code. Whether it's a responsive web application or a cross-platform mobile app, I deliver polished products that users love.
          </p>
        </motion.div>

        {/* Expanded Text */}
        {showFullText && (
          <motion.div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              With a strong foundation in both <span className="text-yellow-400 font-medium">design thinking and software development</span>, I bridge the gap between aesthetics and functionality. I leverage tools like WordPress, Webflow, and modern JavaScript frameworks to bring designs to life.
            </p>
            <p>
              My experience includes SEO optimization, automation (Make, Zapier), and performance optimization — ensuring that every project not only looks great but performs exceptionally across all devices.
            </p>
            <p>
              <span className="text-yellow-400 font-medium">
                My goal is to create digital experiences that are not just visually stunning, but also accessible, performant, and built to solve real user problems.
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
