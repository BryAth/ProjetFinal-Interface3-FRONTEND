import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const registerUrl = "http://localhost:8080/api/account/register"
const loginUrl = "http://localhost:8080/api/account/login"


export const registerUser = createAsyncThunk("auth/register",
    async (data, thunkAPI) => {
        const response = await axios.post(registerUrl, data)
        return response.data
    })


export const loginUser = createAsyncThunk("auth/login",
    async (data, thunkAPI) => {
        const response = await axios.post(loginUrl, data)
        return response.data
    })

export const logout = createAction("auth/logout")