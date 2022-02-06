import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
      state.loading = true;
      state.error = false;
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
