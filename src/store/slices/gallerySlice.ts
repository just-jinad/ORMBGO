import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Image {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface GalleryState {
  images: Image[];
  loading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  images: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk('gallery/fetchImages', async () => {
  const response = await axios.get('/api/gallery');
  return response.data;
});

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<Image[]>) => {
      state.images = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// const gallerySlice = createSlice({
//   name: 'gallery',
//   initialState: {
//     images: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchImages.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchImages.fulfilled, (state, action) => {
//         state.loading = false;
//         state.images = action.payload;
//       })
//       .addCase(fetchImages.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

export const { setImages, setLoading, setError } = gallerySlice.actions;
export default gallerySlice.reducer;
