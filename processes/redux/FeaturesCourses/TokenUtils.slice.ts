import {createSlice} from "@reduxjs/toolkit";

interface StateToken {
    token: string | null
}

const initialState: StateToken = {
    token: null
}

export const TokenUtilsSlice = createSlice({
    name: 'TokenUtilsSlice',
    initialState,
    reducers: {
        saveToken: (state: StateToken, {payload: token}) => {
            state.token = token
        },
        clearToken: (state: StateToken) => {
            state.token = null
        }
    }
})

export const {actions, reducer} = TokenUtilsSlice