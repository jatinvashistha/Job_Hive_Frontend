import { createSlice } from "@reduxjs/toolkit";
export const loadUser = createSlice({
  name: "post",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loadUserRequest: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },

      loadUserSuccess: (state, action) => {

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    },

    loadUserFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    },
  },
});

 export const {loadUserFailure,loadUserSuccess,loadUserRequest} =  loadUser.actions