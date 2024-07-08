import React from 'react';
import profileImage from '../assets/ProfileImage.png'; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div id="home" className="home-section section flex flex-col justify-center items-center bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left md:flex-1 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi There!</h2>
          <h3 className="text-3xl md:text-4xl mb-4">
            I'm a Full Stack <span className="text-blue-700">Developer</span>
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded">
              Hire me
            </button>
            <button className="border border-red-500 text-white py-2 px-4 rounded">
              Download CV
            </button>
          </div>
        </div>
        <div className="md:flex-1 flex justify-center md:justify-end max-w-lg">
          <img src={profileImage} alt="Profile" className="w-64 md:w-80 lg:w-96 h-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

