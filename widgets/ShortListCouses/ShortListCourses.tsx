"use client"
import React, {JSX} from 'react';
import styles from './ShortListCourses.module.css'
import {ILanguageCourses, useGetLanguageCoursesQuery} from "@/processes/redux/api/LanguageCoursesAPI";
import {SerializedError} from "@reduxjs/toolkit";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import CourseItem from "@/entities/CourseItem/CourseItem";

const ShortListCourses = () => {
    const {data, isLoading, error} = useGetLanguageCoursesQuery()

    return (
        <div className={styles.shortListContainer}>
            {
                isLoading ? <div>Loading...</div> :
                    data ?
                    data.map((course: ILanguageCourses) => {
                        return (<CourseItem
                            key={course.id}
                            idCourse={course.id}
                            title={course.title}
                            language={course.language}
                            duration={course.duration}
                            quantityModules={course.quantityModules}
                            price={course.price}
                            />
                        )
                    }) : <div>Not found</div>
            }
        </div>
    );
};

export default ShortListCourses;