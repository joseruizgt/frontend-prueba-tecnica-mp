import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        loading: false
    },
    reducers: {
        credentials: (state, { payload }) => {
            state.token = payload.token;
            state.loading = false;
        },
        logout: (state) => {
            state.token = null;
        },
        isLoading: (state) => {
            state.loading = true;
        },
        loaded: (state) => {
            state.loading = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { credentials, logout, isLoading, loaded } = authSlice.actions;