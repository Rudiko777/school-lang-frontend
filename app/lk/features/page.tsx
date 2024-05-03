'use client'
import React, {useEffect} from 'react';
import {withAccountLayout} from "@/layouts/AccountLayout/AccountLayout";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {
    ILanguageCourses,
    useGetLanguageCourseByIdQuery,
    useGetLanguageCoursesByUserQuery
} from "@/processes/redux/api/LanguageCoursesAPI";
import {useLoadByData} from "@/shared/hooks/useLoadByData";

const Page = () => {
    const userId: number | null = useTypedSelector(state => state.user.id)
    const data: ILanguageCourses[] = useLoadByData()

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div>
            {data?.map((el: ILanguageCourses, idx: number) => {
                return(
                    <div key={idx}>
                        <h1>{el.title}</h1>
                        <h2>{el.duration}</h2>
                        <h3>{el.level}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default withAccountLayout(Page);