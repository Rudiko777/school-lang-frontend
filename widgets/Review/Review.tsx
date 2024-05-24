import React from 'react';
import styles from './Review.module.css'
import {CourseReviewProps} from "@/app/_types/CourseReview.props.ts";
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import Ptag from "@/shared/ui-kit/P/Ptag.tsx";

const Review = ({title, description, userName, grade}: CourseReviewProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <Htag type={"h3-titleAdv"}>
                    {userName}
                </Htag>
                <Htag type={"h3-titleAdv"}>
                    Оценка: {grade}
                </Htag>
            </div>
            <Htag type={"h3-titleAdv"}>
                {title}
            </Htag>
            <Ptag type={"medium"}>
                {description}
            </Ptag>
        </div>
    );
};

export default Review;