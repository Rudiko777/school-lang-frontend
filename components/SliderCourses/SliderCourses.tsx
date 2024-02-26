'use client'
import React, {useEffect} from 'react';
import styles from './SliderCourses.module.css'
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import ShortListCourses from "@/components/ShortListCouses/ShortListCourses";
import '@splidejs/react-splide/css';
import '../../app/globals.css'
import '@splidejs/splide/dist/css/splide.min.css'

const SliderCourses = () => {
    return (
        <Splide className={'splide'} hasTrack={false} aria-label="My Favorite Images" options={{
            rewind: false,
            pagination: true,
            speed: 1000,
            isNavigation: false,
            gap: 800,
            arrows: false
        }}>
            <div className={styles.customWrapper}>
                <SplideTrack>
                    <SplideSlide className={styles.slideContainer}>
                        <ShortListCourses/>
                    </SplideSlide>
                    <SplideSlide className={styles.slideContainer}>
                        <ShortListCourses/>
                    </SplideSlide>
                </SplideTrack>
            </div>

        </Splide>
    );
};

export default SliderCourses;