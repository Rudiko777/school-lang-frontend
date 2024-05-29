'use client'
import React, {useEffect} from 'react';
import {withAccountLayout} from "@/layouts/AccountLayout/AccountLayout";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {
    ILanguageCourses,
    useGetLanguageCourseByIdQuery,
    useGetLanguageCoursesByUserQuery
} from "@/processes/redux/api/LanguageCoursesAPI";
import {useLoadByData} from "@/shared/hooks/useLoadByData";
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import Link from "next/link";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import cn from "classnames";
import CourseItem from "@/entities/CourseItem/CourseItem.tsx";
import styles from './page.module.css'

const Page = () => {
    const userId: number | null = useTypedSelector(state => state.user.id)
    const data: ILanguageCourses[] = useLoadByData()

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.articlesTitle}>
                <Htag type={"h2-ourCourse"}>
                    Ваши курсы
                </Htag>
                <Link href={"/Catalog"}>
                    <Button color={"purple"} size={"large"} typeBtn={"outlined"} className={styles.articlesTitleBtn}>
                        Все курсы
                    </Button>
                </Link>
            </div>
            <div className={styles.latestArticles}>
                <div className={cn(styles.Content, styles.otherCourseWrapper)}>
                    {
                        data.length != 0 ? data.map((el, idx) => <CourseItem
                            className={cn(styles.otherCourse, {
                                [styles.last]: data.length % 2 != 0 && idx + 1 == data.length
                            })}
                            key={el.id}
                            idCourse={el.id}
                            title={el.title}
                            language={el.language}
                            duration={el.duration}
                            quantityModules={el.quantityModules}
                            price={el.price}
                        />) : "У вас пока нет курсов"
                    }
                </div>
            </div>
        </div>

    );
};

export default withAccountLayout(Page);