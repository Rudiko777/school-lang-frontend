'use client'
import React, {JSX, useEffect, useLayoutEffect, useState} from 'react';
import styles from './LanguageCourse.module.css'
import {ILanguageCourses, useGetLanguageCourseByIdQuery} from "@/processes/redux/api/LanguageCoursesAPI";
import {useDispatch, useSelector} from "react-redux";
import {actions, actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";

import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";
import {LanguageCourseTitleCard} from "@/widgets";
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import Ptag from "@/shared/ui-kit/P/Ptag.tsx";
import Accordion from "@/widgets/Accordion/Accordion.tsx";
import Input from "@/shared/ui-kit/Input/Input.tsx";
import Rating from "@/shared/ui-kit/Rating/Rating.tsx";
import Textarea from "@/shared/ui-kit/Textarea/Textarea.tsx";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import {useRouter} from "next/navigation";
import Review from "@/widgets/Review/Review.tsx";
import {useGetBestStudentsQuery} from "@/processes/redux/api/BestStudentsAPI.ts";
import {CourseModuleProps} from "@/app/_types";
import BestStudentItem from "@/shared/BestStudentItem/BestStudentItem.tsx";

interface ILanguageCourseID{
    id: number
}

const LanguageCourse = ({id}: ILanguageCourseID): JSX.Element => {
    const [rating, setRating] = useState<number>(4);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter()
    const user = useTypedSelector(state => state.user)
    const token = useTypedSelector(state => state.token?.token)
    const {data: bestStudents, refetch: refetchStudents} = useGetBestStudentsQuery()
    const {data, isLoading, error, refetch} = useGetLanguageCourseByIdQuery(id)
    const dispatch = useDispatch()
    const student = useTypedSelector(state => state.studentEducation)

    useEffect(() => {
        refetchStudents()
        refetch()
    }, [router])

    if (!data || error) return <div>Not Found</div>
    if (isLoading) return <div>Load</div>


    const saveLanguageCourseInFeature = async () => {
        try {
            const res = await fetch(`http://localhost:8080/features/add/${user?.id}/language-courses/${id}`, {
                method: "POST",
            });
        } catch (error) {
           console.error(error)
        }
    }

    const deleteLanguageCourseFromFeature = async () => {
        try {
            const res = await fetch(`http://localhost:8080/features/delete/${user?.id}/language-courses/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.error(error)
        }
    }

    const isExist = user?.languageCourses.some(el => el == Number(id))

    const handleClickAdd = () => {
        saveLanguageCourseInFeature()
        dispatch(featureActions.toggleCartCourses(data))
        dispatch(userActions.addLanguageCourse(Number(id)))
    }

    const handleClickDelete = () => {
        deleteLanguageCourseFromFeature()
        dispatch(featureActions.toggleCartCourses(data))
        dispatch(userActions.removeLanguageCourse(Number(id)))
    }

    const saveReviewFromCourse = () => {
        const reviewData = {
            userName: user?.fullName,
            title: title,
            grade: rating,
            description: description
        };
        fetch(`http://localhost:8080/api/v1/languageCourses/addReview/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData),
        })
            .then((response) => {
                if (response.ok) {
                    refetch()
                    router.push(`/Catalog/Course-card/${id}`);
                } else {
                    console.error("Ошибка при добавлении отзыва.");
                }
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <article className={styles.article}>
                    <Htag type={"h1-other"}>
                        {data.title}
                    </Htag>
                    <Htag type={"h3-whoseLang"}>
                        О Курсе
                    </Htag>
                    <div className={styles.afterCourse}>
                        <Htag type={"h2-afterCourse"} className={styles.afterCourseTitle}>
                            После прохождения курса:
                        </Htag>
                        <ul className={styles.afterCourseList}>
                            <li className={styles.afterCourseItem}>
                                <Ptag type={"medium"}>
                                    - Легко расскажете о себе, представите свою компанию
                                </Ptag>
                            </li>
                            <li className={styles.afterCourseItem}>
                                <Ptag type={"medium"}>
                                    - Сможете поддержать беседу и без труда ориентироваться в бытовых ситуациях
                                </Ptag>
                            </li>
                            <li className={styles.afterCourseItem}>
                                <Ptag type={"medium"}>
                                    - Легко знакомиться и общаться с окружающими
                                </Ptag>
                            </li>
                            <li className={styles.afterCourseItem}>
                                <Ptag type={"medium"}>
                                    - Вы никогда не потеряетесь в языковой среде
                                </Ptag>
                            </li>
                        </ul>
                    </div>
                </article>
                <div className={styles.courseProgramm}>
                    <Htag type={"h3-whoseLang"}>
                        Программа курса
                    </Htag>
                    <Accordion courseId={id} fullName={user ? user?.fullName : ''} modules={data?.modules}/>
                    {
                        token ?
                            <div className={styles.writeReview}>
                                <Htag type={"h3-whoseLang"}>
                                    Оставить отзыв
                                </Htag>
                                <div className={styles.formReview}>
                                    <div className={styles.grade}>
                                        <Htag type={"h3-sidebar"}>
                                            Оценка
                                        </Htag>
                                        <Rating rating={rating} isEditable={true} setRating={setRating}/>
                                    </div>
                                    <Input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                        placeholder={"Классный курс"} inputSize={"large"} state={"default"} type={"text"} label={"Заголовок"}/>
                                    <Textarea placeholder={"Понравилось оформление"}
                                              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                                              value={description}
                                              state={"default"}
                                              className={styles.text}
                                    />
                                    <Button onClick={saveReviewFromCourse} size={"large"} typeBtn={"outlined"} color={"purple"}>
                                        Отправить отзыв
                                    </Button>
                                </div>
                            </div> : null
                    }
                    {
                        data?.reviews.length !== 0 ? (
                            <div className={styles.reviews}>
                                <Htag type={"h3-whoseLang"}>
                                    Отзывы о курсе
                                </Htag>
                                <div className={styles.reviewsBlocks}>
                                    {
                                        data.reviews?.map((el, idx) =>
                                            <Review
                                                key={idx}
                                                id={el.id}
                                                userName={el.userName}
                                                title={el.title}
                                                grade={el.grade}
                                                description={el.description}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className={styles.sideBar}>
                <LanguageCourseTitleCard
                    modules={data?.quantityModules}
                    language={data?.language}
                    price={data.price}
                    duration={data.duration}
                    level={data.level}
                    isExist={isExist}
                    addToFeatures={handleClickAdd}
                    deleteFromFeatures={handleClickDelete}
                />
                <div className={styles.bestStudents}>
                    <Htag type={"h3-whoseLang"}>
                        Лучшие ученики
                    </Htag>
                    <ul>
                        {
                            bestStudents?.map((el, idx) => {
                                if (el.fullName == student?.fullName){
                                    if (student?.score && (student?.score > bestStudents[idx - 1]?.score || student?.score < bestStudents[idx + 1]?.score)){
                                        refetchStudents()
                                    }
                                    return (
                                        <BestStudentItem
                                            fullName={student?.fullName}
                                            score={student?.score}
                                            key={el.id}
                                            position={idx + 1}
                                        />
                                    )
                                }
                                return (
                                    <BestStudentItem
                                        fullName={el.fullName}
                                        score={el.score}
                                        key={el.id}
                                        position={idx + 1}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LanguageCourse;