import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logout, registerUser } from "../actions/auth-actions";



const initialState = {

    isConnected: false,
    token: ""
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true
            state.token = action.payload.token
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isConnected = false
            state.token = ""
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isConnected = true
            state.token = action.payload.token
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isConnected = false
            state.token = ""
        })
        .addCase(logout,(state,action) => {
            state.isConnected = false
            state.token = ""
        })

})

export default authReducer