import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboardReducer/dashboardSlice";
import locationReducer from "./reducers/locationReducer/locationSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
