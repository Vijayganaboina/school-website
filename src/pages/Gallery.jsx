import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvent } from '../store/gallerySlice';

// Event names for dropdown selection
const events = ['sports_day', 'science_exhibition', 'cultural_fest', 'classroom', 'library'];

// Placeholder images for each event
const placeholderImages = {
  sports_day: [
    { src: 'https://via.placeholder.com/600x400?text=Sports+Day+1', alt: 'Sports Day Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Sports+Day+2', alt: 'Sports Day Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Sports Day+3', alt: 'Sports Day Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Sports Day+4', alt: 'Sports Day Image 4' },
  ],
  science_exhibition: [
    { src: 'https://via.placeholder.com/600x400?text=Science+Exhibition+1', alt: 'Science Exhibition Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Science+Exhibition+2', alt: 'Science Exhibition Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Science+Exhibition+3', alt: 'Science Exhibition Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Science+Exhibition+4', alt: 'Science Exhibition Image 4' },
  ],
  cultural_fest: [
    { src: 'https://via.placeholder.com/600x400?text=Cultural+Fest+1', alt: 'Cultural Fest Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Cultural+Fest+2', alt: 'Cultural Fest Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Cultural+Fest+3', alt: 'Cultural Fest Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Cultural+Fest+4', alt: 'Cultural Fest Image 4' },
  ],
  classroom: [
    { src: 'https://via.placeholder.com/600x400?text=Classroom+1', alt: 'Classroom Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Classroom+2', alt: 'Classroom Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Classroom+3', alt: 'Classroom Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Classroom+4', alt: 'Classroom Image 4' },
  ],
  library: [
    { src: 'https://via.placeholder.com/600x400?text=Library+1', alt: 'Library Image 1' },
    { src: 'https://via.placeholder.com/600x400?text=Library+2', alt: 'Library Image 2' },
    { src: 'https://via.placeholder.com/600x400?text=Library+3', alt: 'Library Image 3' },
    { src: 'https://via.placeholder.com/600x400?text=Library+4', alt: 'Library Image 4' },
  ],
};

// Placeholder videos
const placeholderVideos = [
  { src: 'https://via.placeholder.com/600x400?text=School+Tour', title: 'School Tour Video' },
  { src: 'https://via.placeholder.com/600x400?text=Annual+Function', title: 'Annual Function Video' },
];

const Gallery = () => {
  const selectedEvent = useSelector((state) => state.gallery.selectedEvent);
  const dispatch = useDispatch();

  const handleEventChange = (event) => {
    dispatch(selectEvent(event.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Gallery</h2>
      
      {/* Event Selection Dropdown */}
      <div className="text-center mb-4">
        <label htmlFor="eventSelect" className="block text-lg font-medium mb-2">Select Event</label>
        <select
          id="eventSelect"
          className="p-2 border border-gray-300 rounded"
          onChange={handleEventChange}
          value={selectedEvent}
        >
          {events.map((event) => (
            <option key={event} value={event}>{event.replace('_', ' ')}</option>
          ))}
        </select>
      </div>
      
      {/* Display Images for Selected Event */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {placeholderImages[selectedEvent].map((image, index) => (
          <div 
            key={index} 
            className="w-full h-64 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 overflow-hidden"
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      {/* Display Placeholder Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {placeholderVideos.map((video, index) => (
          <div 
            key={index} 
            className="w-full h-64 bg-white rounded-lg shadow-md flex items-center justify-center text-center transform transition duration-500 hover:scale-105"
          >
            <span className="text-lg font-medium text-gray-700">{video.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
