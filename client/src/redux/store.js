import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    auth: authReducer,
  },
});

export default store;
