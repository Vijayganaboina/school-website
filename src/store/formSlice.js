import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    phone: '',
    grade: '',
  },
  submitted: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    submitForm: (state) => {
      state.submitted = true;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.submitted = false;
    },
  },
});

export const { updateForm, submitForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
