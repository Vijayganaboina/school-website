import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    goToNextSlide: (state) => {
      state.currentIndex += 1;
    },
    goToPreviousSlide: (state) => {
      state.currentIndex -= 1;
    },
    goToSlide: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { goToNextSlide, goToPreviousSlide, goToSlide } = carouselSlice.actions;
export default carouselSlice.reducer;