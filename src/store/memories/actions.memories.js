import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncActions } from "../utls";

export const loadUserMemories = createAsyncActions("memories/GET_MEMORIES");
export const loadCurrentUser = createAsyncThunk("memories/GET_CURRENT_USER");


// First, create the thunk
const fetchCurrentUser = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId);
        return response.data;
    }
);

