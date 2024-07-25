import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goToNextSlide, goToPreviousSlide, goToSlide } from '../store/carouselSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const images = [
  {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Image 1',
    text: 'Annual Sports Day - Celebrating Excellence in Sports',
  },
  {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Image 2',
    text: 'Science Exhibition - Showcasing Student Innovations',
  },
  {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Image 3',
    text: 'Cultural Fest - Embracing Diversity and Creativity',
  },
];

const Carousel = () => {
  const currentIndex = useSelector((state) => state.carousel.currentIndex);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(goToNextSlide());
  };

  const handlePrevious = () => {
    dispatch(goToPreviousSlide());
  };

  const handleSelectSlide = (index) => {
    dispatch(goToSlide(index));
  };

  return (
    <div className="carousel-container w-4/5 mx-auto my-8">
      <ResponsiveCarousel
        selectedItem={currentIndex}
        onChange={handleSelectSlide}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-900 bg-opacity-50 text-white p-2 rounded-full"
              style={{ zIndex: 2 }}
            >
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-900 bg-opacity-50 text-white p-2 rounded-full"
              style={{ zIndex: 2 }}
            >
              &gt;
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: '30.5rem', objectFit: 'cover' }} 
            />
            <div className="absolute bottom-6 bg-blue-900 bg-opacity-50 text-white w-full text-center py-2">
              <p className="text-lg">{image.text}</p>
            </div>
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
