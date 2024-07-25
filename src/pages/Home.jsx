import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="my-8 text-center">
        <h1 className="text-4xl font-bold mt-4 text-blue-700">Springdale Public School</h1>
        <p className="mt-2 text-lg text-gray-700">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      <Carousel />
      <div className="my-8 text-center text-gray-700">
        At Springdale, we are dedicated to nurturing young minds and fostering a love for learning. Our mission is to provide a supportive and inclusive environment where every student can achieve their fullest potential. We are committed to academic excellence, character development, and preparing our students for a bright future. Join us in making a positive impact on the lives of our future leaders.
      </div>
    </div>
  );
};

export default Home;
