import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {featuresCoursesSlice} from "@/redux/FeaturesCourses/FeaturesCourses.slice";
import {languageCoursesAPI} from "@/redux/services/LanguageCoursesAPI";


export const store = configureStore({
    reducer: {
        featuresCourses: featuresCoursesSlice.reducer,
        [languageCoursesAPI.reducerPath]: languageCoursesAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(languageCoursesAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>