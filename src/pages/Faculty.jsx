import React from 'react';

// Data for faculty members
const facultyData = [
  { name: 'John Doe', role: 'Principal', qualification: 'M.Ed', experience: '20 years of experience in educational administration' },
  { name: 'Jane Smith', role: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years of teaching experience' },
  { name: 'Emily Johnson', role: 'English Teacher', qualification: 'M.A. in English', experience: '10 years of teaching experience' },
  { name: 'Michael Brown', role: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years of teaching experience' },
  { name: 'Sophia Davis', role: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years of teaching experience' },
  { name: 'David Wilson', role: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years of teaching experience' },
];

const Faculty = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-green-700">Faculty</h1>
      </header>
      <section className="max-w-5xl mx-auto space-y-8">
        {facultyData.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center transform transition duration-500 hover:scale-105"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={`https://via.placeholder.com/150?text=${member.name.split(' ')[0]}`}
                alt={`${member.name} profile`}
                className="rounded-full w-32 h-32"
              />
            </div>
            {/* Faculty Details */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-blue-900">{member.name}</h2>
              <h3 className="text-xl font-medium text-purple-700">{member.role}</h3>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Qualification:</span> {member.qualification}
              </p>
              <p className="mt-1 text-gray-700">
                <span className="font-semibold">Experience:</span> {member.experience}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faculty;
