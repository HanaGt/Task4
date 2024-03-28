import { configureStore } from "@reduxjs/toolkit";
import { OpportunityApi} from "./Slices/jobSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";



export const store = configureStore({
  reducer: {
    [OpportunityApi.reducerPath]: OpportunityApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([OpportunityApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;