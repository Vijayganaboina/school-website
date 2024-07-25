import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-blue-900">Academics</h1>
      </header>
      <section className="max-w-4xl mx-auto space-y-10">
        {/* Curriculum Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Curriculum"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-900">Curriculum</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>
              <span className="font-bold">Primary (Grades 1-5):</span> English, Mathematics, Science, Social Studies, Art, Physical Education
            </li>
            <li>
              <span className="font-bold">Secondary (Grades 6-10):</span> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
            </li>
            <li>
              <span className="font-bold">Senior Secondary (Grades 11-12):</span>
              <ul className="mt-2 list-disc list-inside ml-6">
                <li>
                  <span className="font-bold">Science Stream:</span> Physics, Chemistry, Biology, Mathematics, Computer Science, English
                </li>
                <li>
                  <span className="font-bold">Commerce Stream:</span> Accountancy, Business Studies, Economics, Mathematics, English
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Teaching Methodologies Section */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Teaching Methodologies"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-yellow-900">Teaching Methodologies</h2>
          <p className="mt-4 text-gray-700">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>

        {/* Educational Resources Section */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Educational Resources"
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-green-900">Educational Resources</h2>
          <p className="mt-4 text-gray-700">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Academics;
