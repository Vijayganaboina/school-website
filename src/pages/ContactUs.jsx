// src/pages/ContactUs.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, submitForm, submitFormSuccess, submitFormFailure } from '../store/contactFormSlice';

const ContactUs = () => {
  const dispatch = useDispatch();
  const { name, email, message, status, error } = useSelector((state) => state.contactForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitForm());
    try {
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        dispatch(submitFormSuccess());
        alert('Thank you for contacting us! We will get back to you soon.');
      }, 1000);
    } catch (err) {
      dispatch(submitFormFailure(err.toString()));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title section */}
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Information section */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700 mb-4"><strong>Email:</strong> info@springdale.edu</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2466325184445!2d78.4766819!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933ec40848a1%3A0x11a0f7627c912b74!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1653341239480!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border border-gray-300"
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
        {/* Contact form section */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => dispatch(setMessage(e.target.value))}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {status === 'failed' && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
