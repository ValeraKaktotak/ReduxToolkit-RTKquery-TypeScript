import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postAPI } from "services/PostService";
import userReducer from "store/reducers/UserSlice";

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
