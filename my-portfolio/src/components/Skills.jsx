import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="section bg-gray-500">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl text-black font-bold mb-16">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl text-black font-bold">HTML</h3>
            <progress className="progress progress-primary w-full" value="75" max="100">75%</progress>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold">CSS</h3>
            <progress className="progress progress-primary w-full" value="70" max="100"></progress>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold">JavaScript</h3>
            <progress className="progress progress-primary w-full" value="65" max="100"></progress>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold">React</h3>
            <progress className="progress progress-primary w-full" value="60" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


