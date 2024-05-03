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

const rootReducer = combineReducers({
    featuresCourses: featuresCoursesSlice.reducer,
    user: UserSlice.reducer,
    [languageCoursesAPI.reducerPath]: languageCoursesAPI.reducer,
    [TargetAudienceAPI.reducerPath]: TargetAudienceAPI.reducer
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
        }).concat(languageCoursesAPI.middleware, TargetAudienceAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export const persister  = persistStore(store)
export type RootState = ReturnType<typeof store.getState>