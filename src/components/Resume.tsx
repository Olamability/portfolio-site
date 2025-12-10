import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/profile.jpg';
import { jsPDF } from 'jspdf';

const SKILLS = [
  "HTML", "CSS", "JavaScript", "React.js", "React Native", "TypeScript",
  "Tailwind CSS", "Firebase", "Node.js", "PostgreSQL", "Figma", "Adobe XD",
  "Flutter", "FlutterFlow", "Framer Motion", "Git", "Microsoft Office Suite",
  "Google Workspace", "Zoom", "Skype", "LinkedIn", 
  "Social Media Management", "Team Collaboration"
];

const Resume: React.FC = () => {
  const PAGE_BREAK_THRESHOLD_HIGH = 250;
  const PAGE_BREAK_THRESHOLD_LOW = 230;

  const checkPageBreak = (doc: jsPDF, yPos: number, threshold: number): number => {
    if (yPos > threshold) {
      doc.addPage();
      return 20;
    }
    return yPos;
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Set font
    doc.setFont('helvetica');
    
    let yPos = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const lineHeight = 7;
    const sectionSpacing = 10;

    // Header - Name and Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('OGUNYANKIN OLUMUYIWA', margin, yPos);
    yPos += 8;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('UI/UX Designer | Frontend Developer | Mobile App Developer', margin, yPos);
    yPos += sectionSpacing;

    // Contact Information
    doc.setFontSize(10);
    doc.text('Nigeria', margin, yPos);
    yPos += 5;
    doc.text('Phone: +234 706 838 2474', margin, yPos);
    yPos += 5;
    doc.text('Email: ogunyankinolumuyiwa@gmail.com', margin, yPos);
    yPos += 5;
    doc.text('Website: https://abilitydigitalz.com.ng', margin, yPos);
    yPos += 5;
    doc.text('GitHub: https://github.com/Olamability', margin, yPos);
    yPos += 5;
    doc.text('LinkedIn: https://linkedin.com/in/olumuyiwa-ogunyankin-2208b6201', margin, yPos);
    yPos += sectionSpacing + 3;

    // Professional Summary Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, yPos);
    yPos += lineHeight;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryText = 'A dedicated and versatile IT professional with over 8 years of experience spanning education, technical support, and software development. My journey began as an ICT Instructor at Nigerian Naval School Imeri, where I developed a passion for technology education and digital transformation. Currently serving as an IT Support Staff/Teacher and UI/UX Designer | Frontend Developer | Mobile App Developer, I combine technical expertise with educational insight to create innovative digital solutions. I specialize in designing intuitive user interfaces, developing responsive web and mobile applications, and providing comprehensive IT support across educational and corporate environments.';
    const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 2 * margin);
    doc.text(summaryLines, margin, yPos);
    yPos += summaryLines.length * 5 + sectionSpacing;

    // Work Experience Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('WORK EXPERIENCE', margin, yPos);
    yPos += lineHeight + 2;

    // Job 1
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('IT Support Staff/Teacher', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('STETCOM, Kogi State | 2023 - Present', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    const job1Duties = [
      'Provide comprehensive technical support for staff and students, ensuring smooth operation of IT infrastructure',
      'Teach computer science and IT courses, developing curriculum aligned with educational standards',
      'Maintain and troubleshoot computer systems, networks, and educational technology equipment',
      'Train teachers and staff on effective use of educational technology platforms and tools',
      'Manage school\'s digital learning management systems and online resources',
      'Implement cybersecurity measures to protect student and institutional data'
    ];
    
    job1Duties.forEach(duty => {
      const dutyLines = doc.splitTextToSize('• ' + duty, pageWidth - 2 * margin - 5);
      doc.text(dutyLines, margin + 3, yPos);
      yPos += dutyLines.length * 5;
    });
    yPos += 5;

    // Job 2
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('UI/UX Designer | Frontend Developer | Mobile App Developer', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Ability Digitalz Media | 2023 - Present', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    const job2Duties = [
      'Design and develop responsive websites and modern web applications using React, TypeScript, and Tailwind CSS',
      'Create intuitive user interfaces and engaging user experiences through comprehensive UX research and design',
      'Build cross-platform mobile applications using React Native and Flutter frameworks',
      'Collaborate with clients to understand requirements and deliver customized digital solutions',
      'Conduct usability testing and iterate designs based on user feedback and analytics',
      'Develop and maintain design systems and component libraries for consistent branding'
    ];
    
    job2Duties.forEach(duty => {
      const dutyLines = doc.splitTextToSize('• ' + duty, pageWidth - 2 * margin - 5);
      doc.text(dutyLines, margin + 3, yPos);
      yPos += dutyLines.length * 5;
    });
    yPos += 5;

    // Check if we need a new page
    yPos = checkPageBreak(doc, yPos, PAGE_BREAK_THRESHOLD_HIGH);

    // Job 3
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('IT Support Staff (Contract)', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Progress International College (PICO), Oke-Igbo, Ondo City | Sept 2022 - Dec 2022', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    const job3Duties = [
      'Provided on-site technical support for faculty, staff, and students',
      'Installed, configured, and maintained computer systems and software applications',
      'Troubleshot hardware and software issues to minimize downtime',
      'Assisted in the setup and maintenance of computer labs and educational technology',
      'Documented technical procedures and created user guides for common IT tasks'
    ];
    
    job3Duties.forEach(duty => {
      const dutyLines = doc.splitTextToSize('• ' + duty, pageWidth - 2 * margin - 5);
      doc.text(dutyLines, margin + 3, yPos);
      yPos += dutyLines.length * 5;
    });
    yPos += 5;

    // Job 4
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Support Staff', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Preston International School, Akure, Ondo State | Jan 2022 - Sept 2022', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    const job4Duties = [
      'Provided technical and administrative support to enhance school operations',
      'Assisted in managing digital learning platforms and online resources',
      'Supported the integration of technology into classroom instruction',
      'Maintained student information systems and school databases',
      'Coordinated with teachers to implement technology-enhanced learning experiences'
    ];
    
    job4Duties.forEach(duty => {
      const dutyLines = doc.splitTextToSize('• ' + duty, pageWidth - 2 * margin - 5);
      doc.text(dutyLines, margin + 3, yPos);
      yPos += dutyLines.length * 5;
    });
    yPos += 5;

    // Check if we need a new page
    yPos = checkPageBreak(doc, yPos, PAGE_BREAK_THRESHOLD_LOW);

    // Job 5
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('ICT Instructor', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Nigerian Naval School, Imeri, Ondo State | 2015 - 2021', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    const job5Duties = [
      'Taught computer science and ICT courses to students at various grade levels',
      'Developed and implemented comprehensive ICT curriculum aligned with national standards',
      'Maintained and managed computer laboratories and ICT infrastructure',
      'Provided technical training and support to staff members to enhance digital literacy',
      'Organized and supervised ICT-related extracurricular activities and competitions',
      'Troubleshot and resolved hardware and software issues for school systems',
      'Implemented basic network administration and cybersecurity protocols'
    ];
    
    job5Duties.forEach(duty => {
      const dutyLines = doc.splitTextToSize('• ' + duty, pageWidth - 2 * margin - 5);
      doc.text(dutyLines, margin + 3, yPos);
      yPos += dutyLines.length * 5;
    });
    yPos += sectionSpacing;

    // Check if we need a new page
    yPos = checkPageBreak(doc, yPos, PAGE_BREAK_THRESHOLD_LOW);

    // Education Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFontSize(11);
    doc.text('M.Sc. Computer Science (In View)', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Adekunle Ajasin University Akungba Akoko | Expected Completion', margin, yPos);
    yPos += 7;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('B.Sc. Computer Science', margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Adekunle Ajasin University Akungba Akoko | 2014', margin, yPos);
    yPos += sectionSpacing;

    // Training & Certifications Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TRAINING & CERTIFICATIONS', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Participation - Global Emerging Tech Summit \'21', margin, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    doc.text('University of Emerging Technologies | 2021', margin, yPos);
    yPos += 4;
    doc.setFont('helvetica', 'italic');
    doc.text('The Tools and Applications of Machine Learning and Artificial Intelligence', margin, yPos);
    yPos += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Attendance - Adapting To New Normal Post COVID-19', margin, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    doc.text('Computer and Telecom Service Limited (CTSLLC) | 2020', margin, yPos);
    yPos += 4;
    doc.setFont('helvetica', 'italic');
    doc.text('Pandemic In Education Service Delivery', margin, yPos);
    yPos += sectionSpacing;

    // Check if we need a new page
    yPos = checkPageBreak(doc, yPos, PAGE_BREAK_THRESHOLD_LOW);

    // Language Skills Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('LANGUAGE SKILLS', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('English (Fluent), Yoruba (Native), Sign Language (Proficient), Hausa (Basic), Igbo (Basic)', margin, yPos);
    yPos += sectionSpacing;

    // Skills Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SKILLS & TECHNOLOGIES', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const skillsText = SKILLS.join(', ');
    const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 2 * margin);
    doc.text(skillsLines, margin, yPos);

    // Save the PDF
    doc.save('Ogunyankin_Olumuyiwa_Resume.pdf');
  };

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
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— About Me</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Professional Summary
            </h2>
            <div className="mt-6 bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
              <p className="text-gray-300 leading-relaxed">
                A dedicated and versatile IT professional with over 8 years of experience spanning education, technical support, and software development. 
                My journey began as an ICT Instructor at Nigerian Naval School Imeri, where I developed a passion for technology education and digital transformation. 
                Currently serving as an IT Support Staff/Teacher and UI/UX Designer | Frontend Developer | Mobile App Developer, I combine technical expertise 
                with educational insight to create innovative digital solutions. I specialize in designing intuitive user interfaces, developing responsive 
                web and mobile applications, and providing comprehensive IT support across educational and corporate environments.
              </p>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Work Experience</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Professional Journey
            </h2>
            <div className="mt-6 space-y-6">
              {/* Current Position 1 */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-yellow-400">IT Support Staff/Teacher</h3>
                <p className="text-gray-400 mt-1">STETCOM, Kogi State • 2023 - Present</p>
                <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Provide comprehensive technical support for staff and students, ensuring smooth operation of IT infrastructure</li>
                  <li>Teach computer science and IT courses, developing curriculum aligned with educational standards</li>
                  <li>Maintain and troubleshoot computer systems, networks, and educational technology equipment</li>
                  <li>Train teachers and staff on effective use of educational technology platforms and tools</li>
                  <li>Manage school's digital learning management systems and online resources</li>
                  <li>Implement cybersecurity measures to protect student and institutional data</li>
                </ul>
              </div>

              {/* Current Position 2 */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-yellow-400">UI/UX Designer | Frontend Developer | Mobile App Developer</h3>
                <p className="text-gray-400 mt-1">Ability Digitalz Media • 2023 - Present</p>
                <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Design and develop responsive websites and modern web applications using React, TypeScript, and Tailwind CSS</li>
                  <li>Create intuitive user interfaces and engaging user experiences through comprehensive UX research and design</li>
                  <li>Build cross-platform mobile applications using React Native and Flutter frameworks</li>
                  <li>Collaborate with clients to understand requirements and deliver customized digital solutions</li>
                  <li>Conduct usability testing and iterate designs based on user feedback and analytics</li>
                  <li>Develop and maintain design systems and component libraries for consistent branding</li>
                </ul>
              </div>

              {/* Contract Position */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">IT Support Staff (Contract)</h3>
                <p className="text-gray-400 mt-1">Progress International College (PICO), Oke-Igbo, Ondo City • Sept 2022 - Dec 2022</p>
                <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Provided on-site technical support for faculty, staff, and students</li>
                  <li>Installed, configured, and maintained computer systems and software applications</li>
                  <li>Troubleshot hardware and software issues to minimize downtime</li>
                  <li>Assisted in the setup and maintenance of computer labs and educational technology</li>
                  <li>Documented technical procedures and created user guides for common IT tasks</li>
                </ul>
              </div>

              {/* Preston International School */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">Support Staff</h3>
                <p className="text-gray-400 mt-1">Preston International School, Akure, Ondo State • Jan 2022 - Sept 2022</p>
                <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Provided technical and administrative support to enhance school operations</li>
                  <li>Assisted in managing digital learning platforms and online resources</li>
                  <li>Supported the integration of technology into classroom instruction</li>
                  <li>Maintained student information systems and school databases</li>
                  <li>Coordinated with teachers to implement technology-enhanced learning experiences</li>
                </ul>
              </div>

              {/* Nigerian Naval School */}
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">ICT Instructor</h3>
                <p className="text-gray-400 mt-1">Nigerian Naval School, Imeri, Ondo State • 2015 - 2021</p>
                <ul className="mt-3 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                  <li>Taught computer science and ICT courses to students at various grade levels</li>
                  <li>Developed and implemented comprehensive ICT curriculum aligned with national standards</li>
                  <li>Maintained and managed computer laboratories and ICT infrastructure</li>
                  <li>Provided technical training and support to staff members to enhance digital literacy</li>
                  <li>Organized and supervised ICT-related extracurricular activities and competitions</li>
                  <li>Troubleshot and resolved hardware and software issues for school systems</li>
                  <li>Implemented basic network administration and cybersecurity protocols</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Education</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Academic Background
            </h2>
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-yellow-400">M.Sc. Computer Science (In View)</h3>
                <p className="text-gray-300 mt-2">Adekunle Ajasin University Akungba Akoko • Expected Completion</p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-xl text-white">B.Sc. Computer Science</h3>
                <p className="text-gray-300 mt-2">Adekunle Ajasin University Akungba Akoko • 2014</p>
              </div>
            </div>
          </motion.div>

          {/* Training & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Training & Certifications</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Professional Development
            </h2>
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-lg text-yellow-400">Certificate of Participation - Global Emerging Tech Summit '21</h3>
                <p className="text-gray-300 mt-2">University of Emerging Technologies • 2021</p>
                <p className="text-gray-400 mt-1 italic">The Tools and Applications of Machine Learning and Artificial Intelligence</p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <h3 className="font-bold text-lg text-white">Certificate of Attendance - Adapting To New Normal Post COVID-19</h3>
                <p className="text-gray-300 mt-2">Computer and Telecom Service Limited (CTSLLC) • 2020</p>
                <p className="text-gray-400 mt-1 italic">Pandemic In Education Service Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Language Skills</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Communication
            </h2>
            <div className="mt-6 bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-yellow-400 font-bold text-lg">English</p>
                  <p className="text-gray-400 text-sm">Fluent</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Yoruba</p>
                  <p className="text-gray-400 text-sm">Native</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Sign Language</p>
                  <p className="text-gray-400 text-sm">Proficient</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Hausa</p>
                  <p className="text-gray-400 text-sm">Basic</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">Igbo</p>
                  <p className="text-gray-400 text-sm">Basic</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="uppercase tracking-widest text-xs text-yellow-400 mb-2">— Skills & Technologies</p>
            <h2 className="text-3xl text-white font-bold mb-6 border-b-2 border-yellow-400 pb-3 inline-block">
              Technical Expertise
            </h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl text-center font-semibold border border-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + Math.min(index * 0.03, 0.5) }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Download PDF Button */}
      <motion.div 
        className="max-w-7xl mx-auto mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <button
          onClick={handleDownloadPDF}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download Resume as PDF
        </button>
      </motion.div>
    </div>
  );
};

export default Resume;
