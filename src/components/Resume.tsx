import React from "react";
import profile from '../assets/profile.jpg';

const Resume: React.FC = () => {
return (
    <div className="min-h-screen bg-gradient-to-r from-[#141e30] to-[#243b55] text-white px-2 py-10 md:px-16">
      <div className="max-w-8xl mx-auto bg-[#1f2235] rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3">
        {/* Left Sidebar */}
        <div className="bg-[#141e30] rounded-t-lg md:rounded-t-none md:rounded-l-lg p-2 flex flex-col items-center">
          <img
            src={profile}
            alt="Olumuyiwa"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-tr-3xl rounded-bl-3xl border-4 border-yellow-400 shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white">Ogunyankin Olumuyiwa</h1>
          <p className="text-yellow-300 text-center py">💻Developer | Mobile Apps & AI Automation</p>
          <div className="mt-2 space-y-1 text-center text-sm py-2">
            <p className="text-yellow-400 font-semibold">
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
            <p>Phone:📱 +234 706 838 2474</p>
            <p>Email: 📧 ogunyankinolumuyiwa@gmail.com</p>
            <p className="text-gray-400">GitHub:{' '}
  <a
    href="https://github.com/Olamability"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-yellow-400 transition-colors duration-300"
  >
    https://github.com/Olamability
  </a>
</p>
            <p className="text-gray-400">
  LinkedIn:{' '}
  <a
    href="https://linkedin.com/in/olumuyiwa-ogunyankin-2208b6201"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-yellow-400 transition-colors duration-300"
  >
    linkedin.com/in/olumuyiwa-ogunyankin-2208b6201
  </a>
</p>

          </div>
        </div>

        {/* Right Content */}
        <div className="col-span-2 p-6 space-y-8">
          {/* Education */}
          <div>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-4 border-b border-yellow-400 pb-2">
              Education
            </h2>
            <div className="space-y-2">
              <h3 className="font-bold">B.Sc. Computer Science</h3>
              <p className="text-gray-300">Adekunle Ajasin University Akungba Akoko - 2014</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-4 border-b border-yellow-400 pb-2">
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Frontend Developer/Mobile Developer</h3>
                <p className="text-gray-300">Ability Digitalz 2023 - Present</p>
                <p className="mt-1">
                  Collaborated and assisted in the development of responsive websites and modern web apps
                </p>
              </div>
              <div>
                <h3 className="font-bold">Support Staff</h3>
                <p className="text-gray-300">Preston International School, Akure, Ondo State – 2022</p>
                <p className="mt-1">
                  
                </p>
              </div>
              <div>
                <h3 className="font-bold">IT Instructor</h3>
                <p className="text-gray-300">Nigerian Naval School, Imeri, Ondo State – 2016 – 2022</p>
                <p className="mt-1">
                  Maintained computer systems and ICT facilities for both staff and students.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-4 border-b border-yellow-400 pb-2">
              Skills
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="bg-[#243b55] p-2 rounded">HTML</li>
              <li className="bg-[#243b55] p-2 rounded">CSS</li>
              <li className="bg-[#243b55] p-2 rounded">JavaScript</li>
              <li className="bg-[#243b55] p-2 rounded">React.js</li>
              <li className="bg-[#243b55] p-2 rounded">React Native</li>
              <li className="bg-[#243b55] p-2 rounded">TypeScript</li>
              <li className="bg-[#243b55] p-2 rounded">Tailwind CSS</li>
              <li className="bg-[#243b55] p-2 rounded">Firebase</li>
              <li className="bg-[#243b55] p-2 rounded">Node.js</li>
              <li className="bg-[#243b55] p-2 rounded">PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
