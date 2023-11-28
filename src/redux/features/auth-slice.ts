import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken?: string,
    refreshToken?: string,
    expiresAt?: number
    userId?: string,
}

const initialState: AuthState = {}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state: any, action: PayloadAction<{
            accessToken: string,
            refreshToken: string,
            expiresAt: number
        }>) => {
            return {
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expiresAt: action.payload.expiresAt
            }
        }
    }
});

export const {
    logIn
} = authSlice.actions;