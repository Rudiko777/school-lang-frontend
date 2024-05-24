import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CourseModuleProps} from "@/app/_types";
import {CourseReviewProps} from "@/app/_types/CourseReview.props.ts";

export interface ILanguageCourses{
    id: number
    language: "Немецкий" | "Английский" | "Китайский" | "Испанский",
    title: string,
    level: string,
    duration: number,
    quantityModules: number,
    price: number,
    modules: CourseModuleProps[],
    reviews: CourseReviewProps[],
}

export const languageCoursesAPI = createApi({
    reducerPath: "languageCoursesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/languageCourses"
    }),
    endpoints: (builder) => ({
        getLanguageCourses: builder.query<ILanguageCourses[], void>({query: () => ''}),
        getLanguageCourseById: builder.query<ILanguageCourses, number>({query: (courseId) => `/${courseId}`}),
        getLanguageCoursesByUser: builder.query<ILanguageCourses[], number>({query: (userId: number | null) => `/find-by-ids/${userId}`})
    })
})

export const {
    useGetLanguageCoursesQuery,
    useGetLanguageCourseByIdQuery,
    useGetLanguageCoursesByUserQuery
} = languageCoursesAPI;