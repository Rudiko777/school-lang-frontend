import {createSlice} from "@reduxjs/toolkit";
import {retry} from "@reduxjs/toolkit/query";

interface StudentEducation {
    fullName: string,
    score: number | null
}

const initialState: StudentEducation = {
    fullName: '',
    score: null
}

export const ScoreStudentSlice = createSlice({
    name: 'ScoreStudentSlice',
    initialState,
    reducers: {
        addEducationStudent: (state: StudentEducation , {payload: params}) => {
            state.fullName = params.fullName
            state.score = params.score
        },
        clearStudent: (state: StudentEducation) => {
            state.fullName = ''
            state.score = null
        },
        plusScore: (state: StudentEducation, {payload: score}) => {
            if (state.score){
                state.score += score
            }
        },
        minusScore: (state: StudentEducation, {payload: score}) => {
            if (state.score){
                state.score -= score
            }
        }
    }
})

export const {actions, reducer} = ScoreStudentSlice