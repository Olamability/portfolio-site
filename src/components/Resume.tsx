import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/profile.jpg';

const Resume: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f2235] via-[#252841] to-[#1f2235] text-white px-4 py-16 md:px-8">
      <motion.div 
        className="max-w-7xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Sidebar */}
        <motion.div 
          className="bg-[#141e30] rounded-t-3xl md:rounded-t-none md:rounded-l-3xl p-6 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={profile}
            alt="Olumuyiwa"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-tr-3xl rounded-bl-3xl border-4 border-yellow-400 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <h1 className="text-3xl font-bold text-white text-center">Ogunyankin Olumuyiwa</h1>
          <p className="text-yellow-400 text-center font-semibold text-lg">UI/UX Designer | Frontend Developer | Mobile App Developer</p>
          <motion.div 
            className="mt-4 space-y-3 text-center text-sm w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gray-800/50 rounded-xl p-4 space-y-2 backdrop-blur-sm border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
              <p className="text-yellow-400 font-semibold flex items-center justify-center gap-2">
                📍 Nigeria | 🌐{' '}
                <a
                  href="https://abilitydigitalz.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors duration-300"
                >
                  abilitydigitalz.com.ng
                </a>
              </p>
              <p className="text-gray-300">📱 +234 706 838 2474</p>
              <p className="text-gray-300">📧 ogunyankinolumuyiwa@gmail.com</p>
              <p className="text-gray-300">
                GitHub:{' '}
                <a
                  href="https://github.com/Olamability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors duration-300"
                >
                  Olamability
                </a>
              </p>
              <p className="text-gray-300">
                LinkedIn:{' '}
                <a
                  href="https://linkedin.com/in/olumuyiwa-ogunyankin-2208b6201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors duration-300"
                >
                  olumuyiwa-ogunyankin
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="col-span-2 p-8 space-y-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Education</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Academic Background
            </h2>
            <div className="mt-6 bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
              <h3 className="font-bold text-xl text-yellow-400">B.Sc. Computer Science</h3>
              <p className="text-gray-300 mt-2">Adekunle Ajasin University Akungba Akoko • 2014</p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Experience</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Professional Journey
            </h2>
            <div className="mt-6 space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-yellow-400">UI/UX Designer | Frontend Developer | Mobile App Developer</h3>
                <p className="text-gray-400 mt-1">Ability Digitalz • 2023 - Present</p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Leading design and development of responsive websites and modern web/mobile applications. Specializing in creating intuitive user interfaces, building scalable frontend solutions with React and TypeScript, and developing cross-platform mobile apps using React Native and Flutter.
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">Support Staff</h3>
                <p className="text-gray-400 mt-1">Preston International School, Akure, Ondo State • 2022</p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Provided technical and administrative support to enhance school operations and student learning experiences.
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">IT Instructor</h3>
                <p className="text-gray-400 mt-1">Nigerian Naval School, Imeri, Ondo State • 2016 – 2022</p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  Maintained computer systems and ICT facilities for both staff and students. Provided technical training and support to enhance digital literacy across the institution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Skills & Technologies</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Technical Expertise
            </h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {["HTML", "CSS", "JavaScript", "React.js", "React Native", "TypeScript", "Tailwind CSS", "Firebase", "Node.js", "PostgreSQL", "Figma", "Adobe XD", "Flutter", "FlutterFlow", "Framer Motion", "Git"].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl text-center font-semibold border border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
