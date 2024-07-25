// src/store/contactFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    submitForm: (state) => {
      state.status = 'loading';
    },
    submitFormSuccess: (state) => {
      state.status = 'succeeded';
      state.name = '';
      state.email = '';
      state.message = '';
    },
    submitFormFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setName, setEmail, setMessage, submitForm, submitFormSuccess, submitFormFailure } = contactFormSlice.actions;

export default contactFormSlice.reducer;
