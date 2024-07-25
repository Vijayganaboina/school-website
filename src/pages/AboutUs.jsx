import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
      </header>
      <section className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="School History"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">History</h2>
          <p className="mt-2 text-gray-700">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="School Vision"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">Vision</h2>
          <p className="mt-2 text-gray-700">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="School Mission"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">Mission</h2>
          <p className="mt-2 text-gray-700">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Principal"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">Principal's Message</h2>
          <p className="mt-2 text-gray-700 text-lg font-bold">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Infrastructure and Facilities"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">Infrastructure and Facilities</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
