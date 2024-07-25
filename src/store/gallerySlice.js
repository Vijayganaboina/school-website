import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEvent: 'sports_day',
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    selectEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const { selectEvent } = gallerySlice.actions;
export default gallerySlice.reducer;
