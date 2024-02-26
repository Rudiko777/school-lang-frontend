'use client'
import React, {JSX} from 'react';
import styles from './LanguageCourse.module.css'
import {ILanguageCourses, useGetLanguageCourseByIdQuery} from "@/redux/services/LanguageCoursesAPI";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "@/redux/FeaturesCourses/FeaturesCourses.slice";
// @ts-ignore
import {WritableDraft} from "immer/src/types/types-external";
import {useTypedSelector} from "@/redux/FeaturesCourses/SelectorCourses";
import {useActions} from "@/hooks/useActions";

interface ILanguageCourseID{
    id: number
}

const LanguageCourse = ({id}: ILanguageCourseID): JSX.Element => {
    const {data, isLoading, error} = useGetLanguageCourseByIdQuery(id)
    const favorites = useTypedSelector(state => state.featuresCourses)
    const dispatch = useDispatch()

    console.log(favorites)

    if (!data || error) return <div>Not Found</div>
    if (isLoading) return <div>Load</div>

    const isExist: boolean = favorites.some((r: ILanguageCourses): boolean => r.id === data.id)

    return (
        <div>
            {data.title}
            <button onClick={() => dispatch(actions.toggleCartCourses(data))}>
                { isExist ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    );
};

export default LanguageCourse;