// adminSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state of admin registration
interface AdminState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AdminState = {
  status: 'idle',
  error: null,
};

// Async action to register an admin
export const registerAdmin = createAsyncThunk(
  'admin/registerAdmin',
  async (adminData: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/admin/signup', adminData);
      return response.data;
    } catch (error: any) {
      console.log(error);
      
      // Reject the promise with the error message
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default adminSlice.reducer;
