'use client'
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {withAccountLayout} from "@/layouts/AccountLayout/AccountLayout";
import Avatar from "@/features/Avatar/Avatar";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import styles from './page.module.css'
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import img from '../../public/lk/img.png'
import Image from "next/image";
import Ptag from "@/shared/ui-kit/P/Ptag.tsx";
import {ILanguageCourses} from "@/processes/redux/api/LanguageCoursesAPI.ts";
import {useLoadByData} from "@/shared/hooks/useLoadByData.ts";
import Link from "next/link";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import {useOtherCourses} from "@/shared/hooks/useOtherCourses.ts";
import CourseItem from "@/entities/CourseItem/CourseItem.tsx";
import cn from "classnames";

const OurCourseItem = ({title, id} : {title: string, id: number}) => {
    return(
        <div className={styles.itemCourse}>
            <Htag type={"h2-afterCourse"}>
                {title}
            </Htag>
            <Link href={`/Catalog/Course-card/${id}`}>
                Перейти на страницу курса
            </Link>
        </div>
    )
}

const Page = () => {
    const[fullName, setFullName] = useState<any>()
    const data: ILanguageCourses[] = useLoadByData()
    const otherCourses: ILanguageCourses[] = useOtherCourses()
    const[item, setItem] = useState<string | null>("")
    const user = useTypedSelector(state => state.user)
    const token = useTypedSelector(state => state.token?.token)

    useLayoutEffect(() => {
        fetchContent()
        if (fullName){
            setItem(token)
        }
    }, []);


    async function fetchContent(){
        const res = await fetch("http://localhost:8080/info", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        })
        if (res.ok){
            const json = await res.text()
            setFullName(json)
        } else {
            localStorage.removeItem("token")
            window.location.href = "/"
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.avatarWrapper}>
                <Avatar className={styles.avatar} fullName={fullName}/>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.title}>
                        <Htag type={"h1-mainTitle"}>
                            Добро пожаловать <br/><span className={styles.lang}>в Language2go</span>, <br/><span>{fullName}</span>
                        </Htag>
                        <Ptag type={"large-desc"}>
                            Достигайте своих целей с помощью авторских игровых методик от носителей языка
                        </Ptag>
                    </div>
                    <Image src={img} alt={"Image"} width={350}/>
                </div>
                <div className={styles.courses}>
                    <div className={styles.coursesTitle}>
                        <Htag type={"h2-ourCourse"}>
                            Ваши курсы
                        </Htag>
                    </div>
                    <div className={styles.Content}>
                        {
                            data.length != 0 ? data.map((el) =>
                                <OurCourseItem key={el.id} title={el.title} id={el.id}/>
                            ) : "У вас пока нет курсов"
                        }
                    </div>
                </div>
                <div className={styles.latestArticles}>
                    <div className={styles.articlesTitle}>
                        <Htag type={"h2-ourCourse"}>
                            Доступные курсы
                        </Htag>
                        <Link href={"/Catalog"}>
                            <Button color={"purple"} size={"large"} typeBtn={"outlined"} className={styles.articlesTitleBtn}>
                                Все курсы
                            </Button>
                        </Link>
                    </div>
                    <div className={cn(styles.Content, styles.otherCourseWrapper)}>
                        {
                            otherCourses.map((el, idx) => <CourseItem
                                className={cn(styles.otherCourse, {
                                    [styles.last]: otherCourses.length % 2 != 0 && idx + 1 == otherCourses.length
                                })}
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
                </div>
            </div>
        </div>
    );
};

export default withAccountLayout(Page);