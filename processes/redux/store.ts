import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {featuresCoursesSlice} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";
import {languageCoursesAPI} from "@/processes/redux/api/LanguageCoursesAPI";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {TargetAudienceAPI} from "@/processes/redux/api/TargetAudienceAPI";
import {UserSlice} from "@/processes/redux/FeaturesCourses/User.slice";
import {TokenUtilsSlice} from "@/processes/redux/FeaturesCourses/TokenUtils.slice.ts";
import {BestStudentsAPI} from "@/processes/redux/api/BestStudentsAPI.ts";
import {FilterLevelSlice} from "@/processes/redux/FeaturesCourses/FilterLevel.slice.ts";
import {ScoreStudentSlice} from "@/processes/redux/FeaturesCourses/ScoreStudent.slice.ts";

const rootReducer = combineReducers({
    featuresCourses: featuresCoursesSlice.reducer,
    user: UserSlice.reducer,
    token: TokenUtilsSlice.reducer,
    filterLevel: FilterLevelSlice.reducer,
    studentEducation: ScoreStudentSlice.reducer,
    [languageCoursesAPI.reducerPath]: languageCoursesAPI.reducer,
    [TargetAudienceAPI.reducerPath]: TargetAudienceAPI.reducer,
    [BestStudentsAPI.reducerPath]: BestStudentsAPI.reducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }).concat(languageCoursesAPI.middleware, TargetAudienceAPI.middleware, BestStudentsAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export const persister  = persistStore(store)
export type RootState = ReturnType<typeof store.getState>