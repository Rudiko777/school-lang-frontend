'use client'
import React, {JSX, useEffect, useLayoutEffect, useState} from 'react';
import styles from './LanguageCourse.module.css'
import {ILanguageCourses, useGetLanguageCourseByIdQuery} from "@/processes/redux/api/LanguageCoursesAPI";
import {useDispatch, useSelector} from "react-redux";
import {actions, actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";
// @ts-ignore
import {WritableDraft} from "immer/src/types/types-external";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {useActions} from "@/shared/hooks/useActions";
import Link from "next/link";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";

interface ILanguageCourseID{
    id: number
}

const LanguageCourse = ({id}: ILanguageCourseID): JSX.Element => {
    const {data, isLoading, error} = useGetLanguageCourseByIdQuery(id)
    const user = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    if (!data || error) return <div>Not Found</div>
    if (isLoading) return <div>Load</div>


    const saveLanguageCourseInFeature = async () => {
        try {
            const res = await fetch(`http://localhost:8080/features/add/${user?.id}/language-courses/${id}`, {
                method: "POST",
            });
        } catch (error) {
           console.error(error)
        }
    }

    const deleteLanguageCourseFromFeature = async () => {
        try {
            const res = await fetch(`http://localhost:8080/features/delete/${user?.id}/language-courses/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.error(error)
        }
    }

    const isExist = user?.languageCourses.some(el => el == Number(id))

    const handleClickAdd = () => {
        saveLanguageCourseInFeature()
        dispatch(featureActions.toggleCartCourses(data))
        dispatch(userActions.addLanguageCourse(Number(id)))
    }

    const handleClickDelete = () => {
        deleteLanguageCourseFromFeature()
        dispatch(featureActions.toggleCartCourses(data))
        dispatch(userActions.removeLanguageCourse(Number(id)))
    }

    return (
        <div>
            {data.title}
            {
                user?.id !== null ?  <button onClick={isExist ? handleClickDelete : handleClickAdd}>
                    { isExist ? 'Remove from' : 'Add to'} favorites
                </button> : <button>
                    <Link href={"/login"}>
                        Войдите в систему
                    </Link>
                </button>
            }
        </div>
    );
};

export default LanguageCourse;