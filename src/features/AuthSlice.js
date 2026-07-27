import { createSlice } from "@reduxjs/toolkit";

const authState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  currentUser:  JSON.parse(localStorage.getItem('user_session')) || null,
  showPass:false
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: authState,
  reducers: {
    login: (state,action) => {
        state.currentUser = action.payload
    },

    registerUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = {...action.payload};
     },

     logout: (state,action)=>{
      state.currentUser = null
      localStorage.removeItem('user_session')
     },

     showPassword:(state,action)=>{
      console.log(action.payload)
      state.showPass = !action.payload.showPass
     }
  },
});

export const {login, registerUser, logout, showPassword} = AuthSlice.actions;

export default AuthSlice.reducer;
