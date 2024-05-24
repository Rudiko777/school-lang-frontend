import React from 'react';
import {BestStudentsProps} from "@/processes/redux/api/BestStudentsAPI.ts";
import {BestStudentItemProps} from "@/shared/BestStudentItem/BestStudentItem.props.ts";
import styles from './BestStudentItem.module.css'


const BestStudentItem = ({fullName, position, score}: BestStudentItemProps) => {
    return (
        <li className={styles.container}>
            <div className={styles.connect}>
                <span className={styles.pos}>{position}</span>
                <h1>{fullName}</h1>
            </div>
            <span className={styles.score}>
                {score} баллов
            </span>
        </li>
    );
};

export default BestStudentItem;