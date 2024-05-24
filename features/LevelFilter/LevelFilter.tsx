import React, {ChangeEventHandler, JSX, useState} from 'react';
import CheckBox from "@/shared/ui-kit/CheckBox/CheckBox";
import styles from '../../app/_styles/FilterLevels.module.css'
import {useDispatch} from "react-redux";
import {actions} from "@/processes/redux/FeaturesCourses/FilterLevel.slice.ts";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";

const LevelFilter = (): JSX.Element => {
    const level = Array.from(useTypedSelector(state => state.filterLevel));
    const dispatch = useDispatch()

    const handlePrimaryChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (level.includes("Начальный")){
            dispatch(actions.deleteLevel("Начальный"))
        }
        else {
            dispatch(actions.addLevel("Начальный"))
        }
    };

    const handleMediumChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (level.includes("Средний")){
            dispatch(actions.deleteLevel("Средний"))
        }
        else {
            dispatch(actions.addLevel("Средний"))
        }
    };

    const handleHardChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (level.includes("Высокий")){
            dispatch(actions.deleteLevel("Высокий"))
        }
        else {
            dispatch(actions.addLevel("Высокий"))
        }
    };


    return (
        <div className={styles.container}>
            <CheckBox isChecked={level?.includes("Начальный")} onChange={handlePrimaryChange}>
                Начальный
            </CheckBox>
            <CheckBox isChecked={level?.includes("Средний")} onChange={handleMediumChange}>
                Средний
            </CheckBox>
            <CheckBox isChecked={level?.includes("Высокий")} onChange={handleHardChange}>
                Высокий
            </CheckBox>
        </div>
    );
};

export default LevelFilter;