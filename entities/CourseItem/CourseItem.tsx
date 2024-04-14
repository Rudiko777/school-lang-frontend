import React, {JSX} from 'react';
import styles from './CourseItem.module.css'
import {CourseItemProps} from "@/entities/CourseItem/CourseItem.props";
import cn from 'classnames'
import Image from "next/image";
import germanyLogo from '../../public/countryFlags/german.png'
import chinaLogo from '../../public/countryFlags/china.png'
import spanishLogo from '../../public/countryFlags/spain.png'
import Htag from "@/shared/ui-kit/Htag/Htag";
import Link from "next/link";
import ArrowRight from '../../public/countryFlags/arrow-right.svg'

const CourseItem = ({title, idCourse, language, duration, quantityModules, price, className, ...props}:CourseItemProps): JSX.Element => {
    return (
        <div className={cn(styles.container, className, {
            [styles.spanish]: language === 'Испанский',
            [styles.chines]: language === 'Китайский',
            [styles.germany]: language === 'Немецкий'
        })} {...props}>
            <Image src={language === 'Испанский' ? spanishLogo : language === 'Китайский' ? chinaLogo : germanyLogo} alt={"FlagCountry"}/>
            <Htag type={'h3-titleCard'} className={styles.title}>
                {title}
            </Htag>
            <div className={styles.details}>
                <p className={styles.duration}>Длительность: <span>{duration} часов</span></p>
                <p className={styles.quantityModules}>Модулей: <span>{quantityModules}</span></p>
            </div>
            <div className={styles.route}>
                <Link href={`/Catalog/Course-card/${idCourse}`}>
                    <div className={styles.linkContainer}>
                        <p className={styles.routeTo}>Узнать подробнее</p>
                        <ArrowRight/>
                    </div>
                </Link>
                <span className={styles.price}>
                    {`От ${price} Р`}
                </span>
            </div>
        </div>
    );
};

export default CourseItem;