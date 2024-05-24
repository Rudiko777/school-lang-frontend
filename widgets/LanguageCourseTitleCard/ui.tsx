import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from '../../app/_styles/LCTitleCard.module.css'
import Image from "next/image";
import spanishLogo from "@/public/countryFlags/spain.png";
import chinaLogo from "@/public/countryFlags/china.png";
import germanyLogo from "@/public/countryFlags/german.png";
import cn from 'classnames'
import Ptag from "@/shared/ui-kit/P/Ptag.tsx";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";
import {actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice.ts";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice.ts";
import {useDispatch} from "react-redux";
import Link from "next/link";

interface ILCTitleCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    language: "Китайский" | "Немецкий" | "Испанский" | "Английский",
    price: number
    modules: number,
    duration: number
    isExist: boolean,
    level: string
    addToFeatures: any,
    deleteFromFeatures: any
}

export const LanguageCourseTitleCard = ({language, duration, level, modules, isExist, price,addToFeatures, deleteFromFeatures, className, ...props}: ILCTitleCard) => {
    const token = useTypedSelector(state => state.token?.token)

    return (
        <div className={cn(styles.container, className)} {...props}>
            <div className={styles.mainInfo}>
                <Ptag type={"titleCard"}>
                    Стоимость<br/><span className={styles.high}>от {price} Р</span>
                </Ptag>
                <Image src={language === 'Испанский' ? spanishLogo : language === 'Китайский' ? chinaLogo : germanyLogo} alt={"FlagCountry"}/>
            </div>
            <ul className={styles.advCardList}>
                <li className={styles.advCardItem}>
                    <Ptag type={"titleCard"}>
                        <span className={styles.highWeight}>{modules}</span> модулей
                    </Ptag>
                </li>
                <li className={styles.advCardItem}>
                    <Ptag type={"titleCard"}>
                        <span className={styles.highWeight}>{duration}</span> часов обучения
                    </Ptag>
                </li>
                <li className={styles.advCardItem}>
                    <Ptag type={"titleCard"}>
                        <span className={styles.highWeight}>Уровень </span> {level}
                    </Ptag>
                </li>
            </ul>
            {
                token !== null ? <Button onClick={isExist ? deleteFromFeatures : addToFeatures} className={styles.btn} size={"large"} typeBtn={"contained"} color={"purple"}>
                    {isExist ? "Удалить из избранного" : "Добавить в избранное"}
                </Button> : <Link href={"/login"}>
                    <Button className={styles.btn}  size={"large"} typeBtn={"contained"} color={"purple"}>
                        Войти в систему
                    </Button>
                </Link>
            }
        </div>
    );
};