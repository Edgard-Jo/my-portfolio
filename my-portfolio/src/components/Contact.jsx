import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hbnx1oy',  
      'template_alv0lea', 
      form.current,
      'isGgB2FnVK7aDt-Ih'      
    ).then((result) => {
      alert('Message successfully sent!');
    }).catch((error) => {
      console.error(error.text);
      alert('An error has occurred, please try again');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="container mx-auto my-8 p-4 flex justify-center items-center bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <h2 className="text-2xl text-center font-bold mb-4">Contact Me <span role="img" aria-label="point up">☝️</span></h2>
          <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your message</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-black"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full md:w-auto mt-4">Submit <span className="ml-2">➔</span></button>
          </form>
        </div>
        <div className="md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
          <FaEnvelope className="text-8xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default Contact;