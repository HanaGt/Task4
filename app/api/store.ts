import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice"
import { authApiSlice } from "./auth/api/authSlice";
import { OpportunityApi } from "./Slices/jobSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [OpportunityApi.reducerPath]: OpportunityApi.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(OpportunityApi.middleware,
      authApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;