import React from 'react';
import quickListImg from '../assets/quicklist.png';
import movieAppImg from '../assets/movieapp.png';
import weatherAppImg from '../assets/weatherapp.png';

const Projects = () => {
  return (
    <div id="projects" className="container bg-gray-500 mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 rounded-lg shadow-xl">
          <a href="https://your-quicklist-link.com" target="_blank" rel="noopener noreferrer">
            <div className="card-body">
              <h3 className="card-title">QuickList</h3>
              <div className="h-64 bg-gray-200">
                <img src={quickListImg} alt="QuickList" className="object-cover w-full h-full"/>
              </div>
              <div className="mt-4">A simple and quick list management application.</div>
            </div>
          </a>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <a href="https://favorite-movies-list.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="card-body">
              <h3 className="card-title">Movie App</h3>
              <div className="h-64 bg-gray-800">
                <img src={movieAppImg} alt="Movie App" className="object-cover w-full h-full"/>
              </div>
              <div className="mt-4">An application to browse and discover movies.</div>
            </div>
          </a>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <a href="https://weather-app-eta-five-31.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="card-body">
              <h3 className="card-title">Weather App</h3>
              <div className="h-64 bg-gray-200">
                <img src={weatherAppImg} alt="Weather App" className="object-cover w-full h-full"/>
              </div>
              <div className="mt-4">A weather forecasting application.</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;