import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface ILanguageCourses{
    id: number
    language: "Немецкий" | "Английский" | "Китайский" | "Испанский",
    title: string,
    level: string,
    duration: number,
    quantityModules: number,
    price: number
}

export const languageCoursesAPI = createApi({
    reducerPath: "languageCoursesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/languageCourses"
    }),
    endpoints: (builder) => ({
        getLanguageCourses: builder.query<ILanguageCourses[], void>({query: () => ''}),
        getLanguageCourseById: builder.query<ILanguageCourses, number>({query: (courseId) => `/${courseId}`})
    })
})

export const {
    useGetLanguageCoursesQuery,
    useGetLanguageCourseByIdQuery
} = languageCoursesAPI;