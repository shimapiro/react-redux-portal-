import { createSlice } from "@reduxjs/toolkit";

type AuthLogin = {
  isLogin: boolean;
};

const initialState: AuthLogin = {
  isLogin: true,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
