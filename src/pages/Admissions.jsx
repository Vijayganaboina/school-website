import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, submitForm, resetForm } from '../store/formSlice';
import AdmissionForm from '../assets/admission_form.pdf'

const Admissions = () => {
  const dispatch = useDispatch();
  const { formData, submitted } = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-blue-900">Admissions</h1>
      </header>
      <section className="max-w-3xl mx-auto space-y-8">
        {/* Admission Process Section */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-900">Admission Process</h2>
          <p className="mt-4 text-gray-700">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <a href={AdmissionForm} download className="text-purple-700 underline mt-2 inline-block">
            Download Admission Form
          </a>
        </div>

        {/* Admission Criteria Section */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-900">Admission Criteria</h2>
          <p className="mt-4 text-gray-700">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>

        {/* Important Dates Section */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-teal-900">Important Dates</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li><span className="font-bold">Admission Form Availability:</span> March 1st</li>
            <li><span className="font-bold">Last Date for Submission:</span> March 31st</li>
            <li><span className="font-bold">Entrance Test:</span> April 15th</li>
            <li><span className="font-bold">Announcement of Results:</span> April 30th</li>
          </ul>
        </div>

        {/* Online Admission Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">Online Admission Form</h2>
          {submitted ? (
            <div className="text-center text-green-700">
              <p>Thank you for your submission! We will get back to you soon.</p>
              <button onClick={handleReset} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded">
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="grade" className="block text-gray-700">Grade Applying For</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">Submit</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admissions;
