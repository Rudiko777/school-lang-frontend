import {createSlice} from "@reduxjs/toolkit";
// @ts-ignore
import {WritableDraft} from "immer/src/types/types-external";
import {number} from "prop-types";

export interface UserProps{
    id: number | null
    fullName: string,
    birthday: string,
    email: string,
    gender: string,
    phoneNumber: string,
    login: string,
    password: string,
    confirmPassword: string,
    languageCourses: number[]
    roles: any[],
}

const initialState: UserProps | null = {
    id: null,
    fullName: "",
    birthday: "",
    email: "",
    gender: "",
    phoneNumber: "",
    login: "",
    password: "",
    confirmPassword: "",
    languageCourses: [],
    roles: [],
}

export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, {payload: user}) => {
            state.id = user.id
            state.fullName = user.fullName
            state.birthday = user.birthday
            state.email = user.email
            state.gender = user.gender
            state.phoneNumber = user.phoneNumber
            state.login = user.login
            state.password = user.password
            state.confirmPassword = user.confirmPassword
            state.languageCourses = user.languageCourses
            user.roles.forEach((el: any) => {
                state.roles.push(el["name"])
            })
        },
        deleteUser: (state: WritableDraft<UserProps>) => {
            state.id = null
            state.fullName = ""
            state.birthday = ""
            state.email = ""
            state.gender = ""
            state.phoneNumber = ""
            state.login = ""
            state.password = ""
            state.confirmPassword = ""
            state.languageCourses = []
            state.roles = []
        },
        addLanguageCourse: (state, {payload: courseId}) => {
            state.languageCourses.push(Number(courseId))
        },
        removeLanguageCourse: (state, {payload: courseId}) => {
            const index = state?.languageCourses.findIndex(course => course === courseId);
            console.log(index)
            if (index !== -1) {
                state.languageCourses.splice(index, 1);
            }
        }
    }
})

export const {actions, reducer} = UserSlice