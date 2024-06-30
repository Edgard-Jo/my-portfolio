import React from 'react';
import profileImage from '../assets/Me.jpg';

const About = () => {
  return (
    <div id="about" className="about-section section flex justify-center items-center bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
        <div className="md:flex-1 flex justify-center mb-8 md:mb-0">
          <img src={profileImage} alt="Profile" className="w-64 h-auto rounded-full" />
        </div>
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2 text-center">About me</h2>
          <h3 className="text-3xl text-blue-800 mb-2">Edgard Jocelyn Amvame</h3>
          <h4 className="text-xl text-red-500 mb-4 text-center">Full Stack Developer</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 border border-gray-500 rounded-lg">
              <p className="text-lg font-bold text-center">Location</p>
              <p className="text-blue-700 text-center">Friedberg, Germany</p>
            </div>
            <div className="p-4 border border-gray-500 rounded-lg">
              <p className="text-lg font-bold text-center">Age</p>
              <p className="text-blue-700 text-center"> 33 </p>
            </div>
            <div className="p-4 border border-gray-500 rounded-lg">
              <p className="text-lg font-bold text-center">Experience</p>
              <p className="text-blue-700 text-center">Less than 1 year</p>
            </div>
            <div className="p-4 border border-gray-500 rounded-lg">
              <p className="text-lg font-bold text-center">Projects</p>
              <p className="text-blue-700 text-center">  4  </p>
            </div>
          </div>
          <p className="text-lg">
          After studying electrical engineering, specialising in information and communication techniques, I made an atypical choice, that of freedom. This choice led me to work as a translator, which I had started during my studies and later pursued on a freelance basis. After Corona and the ordeal that the whole planet went through, I felt the need to reinvent myself, a need that led me to train in web-development at DCi. And what started out as a need for change is now becoming a passion. My name is Edgard Jocelyn Amvame and I'm a web developer at the end of my training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;