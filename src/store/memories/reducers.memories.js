import { createReducer } from "@reduxjs/toolkit";
import { loadUserMemories } from "./actions.memories"

// Store initial state
const initialState = {
    user: null,
    memories: {
        list: [],
        loading: false,
        error: null
    }
}

export const memoriesReducer = createReducer(initialState, {
    [loadUserMemories.started.type]: (state) => {
        state.memories.loading = true;
    },
    [loadUserMemories.succeeded.type]: (state, action) => {
        state.memories.loading = false;
        state.memories.list = action.payload.memories;
    },
    [loadUserMemories.failed.type]: (state, action) => {
        state.memories.loading = false;
        state.memories.error = action.payload.error;
    }
});

export default memoriesReducer;