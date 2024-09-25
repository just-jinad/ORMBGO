import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  isAuthenticated: boolean;
  role: 'SUPER_ADMIN' | 'SUB_ADMIN' | null;
  username: string | null;
}

const initialState: AdminState = {
  isAuthenticated: false,
  role: null,
  username: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: 'SUPER_ADMIN' | 'SUB_ADMIN'; username: string }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.username = null;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;
