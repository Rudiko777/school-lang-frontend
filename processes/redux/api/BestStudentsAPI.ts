import {AudienceProps} from "@/entities/Audience/Audience.props.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CourseModuleProps} from "@/app/_types";

export interface BestStudentsProps{
    id: number,
    fullName: string,
    score: number,
    modules: CourseModuleProps[]
}

export const BestStudentsAPI = createApi({
    reducerPath: "BestStudentsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/bestStudents"
    }),
    endpoints: (builder) => ({
        getBestStudents: builder.query<BestStudentsProps[], void>({
                query: () => '',
                transformResponse: async (response: BestStudentsProps[]) => {
                    return response.sort((a, b) => b.score - a.score);
                }
            }
        ),
        getBestStudentByFullName: builder.query<BestStudentsProps, string>({
                query: (fullName) => `/${fullName}`
            }
        )
    })
})

export const {useGetBestStudentsQuery, useGetBestStudentByFullNameQuery} = BestStudentsAPI