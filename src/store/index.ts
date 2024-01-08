import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // ...
  },
});

export type rootReducer = ReturnType<typeof store.getState>;
