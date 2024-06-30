import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-800 text-white mt-auto">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com" className="text-2xl text-blue-500"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.github.com" className="text-2xl text-gray-500"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.twitter.com" className="text-2xl text-blue-400"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com" className="text-2xl text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.youtube.com" className="text-2xl text-red-500"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <p>&copy; 2024 Edgard Jocelyn Amvame. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
