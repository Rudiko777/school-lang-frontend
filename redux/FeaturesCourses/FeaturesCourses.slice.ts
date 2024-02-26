import {createSlice} from "@reduxjs/toolkit";
import {ILanguageCourses} from "@/redux/services/LanguageCoursesAPI";

const initialState: ILanguageCourses[] = []

export const featuresCoursesSlice = createSlice({
    name: 'cartCourses',
    initialState,
    reducers: {
        toggleCartCourses: (state, {payload: course}) => {
            const isExist = state.some(c => c.id === course.id)
            if (isExist){
                const index = state.
                findIndex(item => item.id === course.id)
                if (index !== -1) state.splice(index, 1)
            }
            else {
                state.push(course)
            }
        }
    }
})

export const {actions, reducer} = featuresCoursesSlice

