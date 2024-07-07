'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/shared/ui-kit/Button/Button";
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout";
import ClipBtn from "@/shared/ui-kit/ClipBtn/ClipBtn";
import promo from '../public/mainPage/Promo.png'
import {JSX, useEffect, useState} from "react";
import Htag from "@/shared/ui-kit/Htag/Htag";
import Ptag from "@/shared/ui-kit/P/Ptag";
import CourseItem from "@/entities/CourseItem/CourseItem";
import ShortListCourses from "@/widgets/ShortListCouses/ShortListCourses";
import SliderCourses from "@/widgets/SliderCourses/SliderCourses";
import Input from "@/shared/ui-kit/Input/Input";
import {useGetTargetAudienceQuery} from "@/processes/redux/api/TargetAudienceAPI";
import Audience from "@/entities/Audience/Audience";
import CheckBox from "@/shared/ui-kit/CheckBox/CheckBox";
import LevelFilter from "@/features/LevelFilter/LevelFilter";
import ButtonAccordion from "@/shared/ui-kit/ButtonAccordion/ButtonAccordion";
import Accordion from "@/widgets/Accordion/Accordion";
import AccordionItem from "@/widgets/Accordion/Accordion";
import {decode} from "jsonwebtoken";
import {useGetLanguageCourseByIdQuery} from "@/processes/redux/api/LanguageCoursesAPI.ts";
import Link from "next/link";
import CompoundComponent from "@/widgets/CompoundComponent/ToggleCompound.tsx";
import RenderProps from "@/widgets/RenderProps/RenderProps.tsx";

type ObjectTy = {
    a: string,
    b: boolean
}

type Answer = ObjectTy['a']

function Home(): JSX.Element {
    const {data, isLoading, isError} = useGetTargetAudienceQuery()


    useEffect(() => {
        if (localStorage.getItem("token") !== null){
            const token = localStorage.getItem("token")
            if (token !== null){
                console.log(decode(token))
            }
        }
    }, []);

    return (
    <>
        <section className={styles.promo}>
            <div className={styles.promoContent}>
                <p className={styles.smallTitle}>Language to go</p>
                <Htag type={'h1-mainTitle'} className={styles.bigTitle}>
                    Онлайн-школа иностранных языков
                </Htag>
                <Ptag type={'large-desc'} className={styles.titleDescription}>Достигайте своих целей с помощью авторских игровых методик от носителей языка</Ptag>
                <div className={styles.cta}>
                    <Button size={'large'} typeBtn={'contained'} color={'purple'}>
                        Попробовать бесплатно
                    </Button>
                    <ClipBtn>
                        Посмотреть промо-ролик
                    </ClipBtn>
                </div>
            </div>
            <Image className={styles.imgPromo} src={promo} alt={'PromoImage'}/>
        </section>
        <section className={styles.shortCourses}>
            <div className={styles.shortCoursesHeader}>
                <Htag type={'h2-titleBlock'} className={styles.shortCoursesTitle}>
                    Курсы иностранных языков для любого уровня
                </Htag>
                <Button size={'medium'} typeBtn={'outlined'} color={'purple'}>
                    Все курсы
                </Button>
            </div>
            <SliderCourses/>
        </section>
        <section className={styles.whoWillSuit}>
            <div className={styles.whoWillSuitContent}>
                <div className={styles.whoWillSuitInfo}>
                    <Htag type={'h2-titleBlock'} className={styles.whoWillSuitTitle}>
                        Кому подойдет <br/> <span>L2GO</span>
                    </Htag>
                    <Ptag type={'large-adv'} className={styles.whoWillSuitDesc}>
                        <span>Language to go</span> подойдет всем, кто хочет за короткий срок качественно изменить свою жизнь, освоив иностранный язык.
                    </Ptag>
                    <Button size={'large'} typeBtn={'contained'} color={'purple'} className={styles.whoWillSuitBtn}>
                        Попробовать бесплатно
                    </Button>
                </div>
                <div className={styles.whoWillSuitAdv}>
                    {data?.map((el, idx) => {
                        return(
                            <Audience key={idx} id={el.id} whom={el.whom} description={el.description} image={el.image}/>
                        )
                    })}
                </div>
            </div>
        </section>
        {/*<CompoundComponent/>*/}
        {/*<RenderProps/>*/}
    </>
  );
}

export default withMainPageLayout(Home);