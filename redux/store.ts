import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {featuresCoursesSlice} from "@/redux/FeaturesCourses/FeaturesCourses.slice";
import {languageCoursesAPI} from "@/redux/services/LanguageCoursesAPI";
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

const rootReducer = combineReducers({
    featuresCourses: featuresCoursesSlice.reducer,
    [languageCoursesAPI.reducerPath]: languageCoursesAPI.reducer
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
        }).concat(languageCoursesAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export const persister  = persistStore(store)
export type RootState = ReturnType<typeof store.getState>