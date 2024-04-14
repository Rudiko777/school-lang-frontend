import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AudienceProps} from "@/entities/Audience/Audience.props";

export const TargetAudienceAPI = createApi({
    reducerPath: "TargetAudienceAPI",
    baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:8080/getTargetAudience"
    }),
    endpoints: (builder) => ({
        getTargetAudience: builder.query<AudienceProps[], void>({query: () => ''})
    })
})

export const {useGetTargetAudienceQuery} = TargetAudienceAPI