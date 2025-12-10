import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1f2235] via-[#252841] to-[#1f2235] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-sm text-yellow-400 mb-3">— Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my recent work in UI/UX design, frontend development, and mobile app development
          </p>
        </motion.div>

        {/* Project Cards */}
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
