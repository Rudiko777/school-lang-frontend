'use client'
import React, {useEffect, useState} from 'react';
import styles from './SliderCourses.module.css'
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import ShortListCourses from "@/widgets/ShortListCouses/ShortListCourses";
import '@splidejs/react-splide/css';
import '../../app/globals.css'
import '@splidejs/splide/dist/css/splide.min.css'
import {useGetLanguageCoursesQuery} from "@/processes/redux/api/LanguageCoursesAPI.ts";
import CourseItem from "@/entities/CourseItem/CourseItem.tsx";

const SliderCourses = () => {
    const {data, isLoading, error, refetch} = useGetLanguageCoursesQuery()

    return (
        <Splide className={styles.customWrapper} hasTrack={false} aria-label="My Favorite Images" options={{
            rewind: false,
            pagination: true,
            speed: 1000,
            isNavigation: false,
            paginationDirection: "ltr",
            gap: 800,
            arrows: false
        }}>
            <SplideTrack>
                {data &&
                    data.map((course) => (
                        <SplideSlide className={styles.slideContainer} key={course.id}>
                            <CourseItem
                                key={course.id}
                                idCourse={course.id}
                                title={course.title}
                                language={course.language}
                                duration={course.duration}
                                quantityModules={course.quantityModules}
                                price={course.price}
                            />
                        </SplideSlide>
                    ))}
            </SplideTrack>
            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">Prev</button>
                <button className="splide__arrow splide__arrow--next">Next</button>
            </div>
        </Splide>
    );
};

export default SliderCourses;