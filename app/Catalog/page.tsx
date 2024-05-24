'use client'
import React, {useEffect, useState} from 'react';
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout";
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import styles from '../_styles/Catalog.module.css'
import Button from "@/shared/ui-kit/Button/Button.tsx";
import cn from 'classnames'
import LevelFilter from "@/features/LevelFilter/LevelFilter.tsx";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";
import {ILanguageCourses} from "@/processes/redux/api/LanguageCoursesAPI.ts";
import LanguageCourse from "@/entities/LanguageCourse/LanguageCourse.tsx";
import CourseItem from "@/entities/CourseItem/CourseItem.tsx";

const getFilteredCourses = async (language: string, levels: string[]) => {
    const response = await fetch('http://localhost:8080/api/v1/languageCourses/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            language: language,
            levels: levels,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch filtered courses');
    }

    const filteredCourses = await response.json();
    return filteredCourses;
};

interface TabProps{
    title: string,
    state: boolean,
    onClick: () => void
}

const Tab = ({title, state, onClick}: TabProps) => {
    return(
        <button className={cn(styles.tab, {
            [styles.tabActive]: state
        })} onClick={onClick}  >
            {title}
        </button>
    )
}


const Catalog = () => {
    const [activeTab, setActiveTab] = useState(0);
    const level = useTypedSelector(state => state.filterLevel)
    const[courses, setCourses] = useState<ILanguageCourses[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const equivalent = activeTab == 0 ? "Все" : activeTab == 1 ? "Испанский" : activeTab == 2 ? "Китайский" : activeTab == 3 ? "Немецкий" : ""
            const items = await getFilteredCourses(equivalent, level);
            setCourses(items)
        }
        fetchData();

    }, [level, activeTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    }

    return (
        <div className={styles.wrapper}>
            <Htag type={"h1-other"}>
                Курсы
            </Htag>
            <div className={styles.tabs}>
                <Tab
                    title={"Все"}
                    state={activeTab === 0}
                    onClick={() => handleTabClick(0)}
                />
                <Tab
                    title={"Испанский"}
                    state={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                />
                <Tab
                    title={"Китайский"}
                    state={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                />
                <Tab
                    title={"Немецкий"}
                    state={activeTab === 3}
                    onClick={() => handleTabClick(3)}
                />
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.content}>
                    {
                        courses.map(el =>  <CourseItem
                            className={styles.cardItem}
                            key={el.id}
                            idCourse={el.id}
                            title={el.title}
                            language={el.language}
                            duration={el.duration}
                            quantityModules={el.quantityModules}
                            price={el.price}
                        />)
                    }
                </div>
                <div className={styles.filters}>
                    <div className={styles.levels}>
                        <Htag type={"h3-titleAdv"}>
                            Уровень
                        </Htag>
                        <LevelFilter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withMainPageLayout(Catalog);