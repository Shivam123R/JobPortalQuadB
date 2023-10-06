import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; // Clear user information when logging out
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
