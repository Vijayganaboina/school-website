import React from 'react';

// Data for students section
const studentsData = {
  lifeAtSpringdale: {
    extracurricular: [
      'Music',
      'Dance',
      'Drama',
      'Art',
      'Sports',
      'Robotics',
      'Debate Club',
      'Science Club',
    ],
    clubs: [
      'Literary Society',
      'Environmental Club',
      'Astronomy Club',
      'Coding Club',
    ],
  },
  achievements: [
    'John Smith - National Level Math Olympiad Winner',
    'Sarah Lee - Gold Medalist in State Swimming Championship',
    'Tech Innovators Club - Winners of Inter-School Robotics Competition',
  ],
  studentCouncil: {
    president: 'Amy Parker, Grade 12',
    vicePresident: 'Rajiv Mehta, Grade 11',
    secretary: 'Lisa Wong, Grade 10',
  },
};

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-blue-700">Students</h1>
      </header>
      
      {/* Life at Springdale Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Life at Springdale</h2>
        <div className="flex flex-wrap justify-center space-y-6">
          {/* Extracurricular Activities */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <img 
                src="https://via.placeholder.com/400x300?text=Extracurricular+Activities"
                alt="Extracurricular Activities"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Extracurricular Activities</h3>
              <ul className="list-disc ml-6">
                {studentsData.lifeAtSpringdale.extracurricular.map((activity, index) => (
                  <li key={index} className="text-gray-700">{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clubs and Societies */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <img 
                src="https://via.placeholder.com/400x300?text=Clubs+and+Societies"
                alt="Clubs and Societies"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Clubs and Societies</h3>
              <ul className="list-disc ml-6">
                {studentsData.lifeAtSpringdale.clubs.map((club, index) => (
                  <li key={index} className="text-gray-700">{club}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Achievements</h2>
        <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
          <img 
            src="https://via.placeholder.com/400x300?text=Achievements"
            alt="Achievements"
            className="w-full rounded-lg mb-4"
          />
          <ul className="list-disc ml-6">
            {studentsData.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Student Council Section */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Student Council</h2>
        <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
          <img 
            src="https://via.placeholder.com/400x300?text=Student+Council"
            alt="Student Council"
            className="w-full rounded-lg mb-4"
          />
          <ul className="list-disc ml-6">
            <li className="text-gray-700"><strong>President:</strong> {studentsData.studentCouncil.president}</li>
            <li className="text-gray-700"><strong>Vice President:</strong> {studentsData.studentCouncil.vicePresident}</li>
            <li className="text-gray-700"><strong>Secretary:</strong> {studentsData.studentCouncil.secretary}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Students;
