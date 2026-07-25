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
    login: () => console.log("login"),

    registerUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = {...action.payload};
     },

     showPassword:(state,action)=>{
      console.log(action.payload)
      state.showPass = !action.payload.showPass
     }
  },
});

export const {login, registerUser,showPassword} = AuthSlice.actions;

export default AuthSlice.reducer;
