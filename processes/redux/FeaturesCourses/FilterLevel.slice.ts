import {createSlice} from "@reduxjs/toolkit";

const initialState: string[] = []

export const FilterLevelSlice = createSlice({
    name: 'FilterLevelSlice',
    initialState,
    reducers: {
        addLevel: (state: string[] , {payload: level}) => {
            if (!Array.isArray(state)) {
                return initialState; // or return [];
            }
            return [...state, level];
        },
        deleteLevel: (state: string[], {payload: level}) => {
            if (!Array.isArray(state)) {
                return initialState; // or return [];
            }
            return state.filter((el) => el !== level);
        }
    }
})

export const {actions, reducer} = FilterLevelSlice