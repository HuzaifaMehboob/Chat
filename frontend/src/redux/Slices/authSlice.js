import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null
};

const authSlice = createSlice({
  name: "authUser",
  initialState, // <-- Define initial state here
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // <-- Modify the token within the state
    },
    clearToken: (state) => {
      state.token =  null ;
    }
  }
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
