'use client'
import React from 'react';
import styles from './SliderCourses.module.css'
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import ShortListCourses from "@/widgets/ShortListCouses/ShortListCourses";
import '@splidejs/react-splide/css';
import '../../app/globals.css'
import '@splidejs/splide/dist/css/splide.min.css'

const SliderCourses = () => {
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
                <SplideSlide className={styles.slideContainer}>
                    <ShortListCourses/>
                </SplideSlide>
                <SplideSlide className={styles.slideContainer}>
                    <ShortListCourses/>
                </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">Prev</button>
                <button className="splide__arrow splide__arrow--next">Next</button>
            </div>
        </Splide>
    );
};

export default SliderCourses;