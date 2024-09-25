import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import galleryReducer from './slices/gallerySlice';
import adminReducer from './slices/adminSlice';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
