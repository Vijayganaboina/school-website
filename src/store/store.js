import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carouselSlice';
import formReducer from './formSlice';
import galleryReducer from './gallerySlice';
import contactFormReducer from './contactFormSlice';

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    form: formReducer,
    gallery: galleryReducer,
    contactForm: contactFormReducer,
  },
});
