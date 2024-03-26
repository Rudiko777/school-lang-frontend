import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstname: null,
    lastname: null,
    id: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        serUser(state, action){
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.id = action.payload.id
        },
        removeUser(state){
            state.firstname = null
            state.lastname = null
            state.id = null
        }
    }
})