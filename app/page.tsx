'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/shared/ui-kit/Button/Button";
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout";
import ClipBtn from "@/shared/ui-kit/ClipBtn/ClipBtn";
import promo from '../public/mainPage/Promo.png'
import {JSX} from "react";
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

function Home(): JSX.Element {
  const {data, isLoading, isError} = useGetTargetAudienceQuery()

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
        <LevelFilter/>
        <Accordion/>
        <CourseItem
            title={"Немецкий для начального уровня"}
            language={"Немецкий"}
            duration={45}
            quantityModules={3}
            price={6520}
        />
        <ClipBtn>
            Посмотреть промо-ролик
        </ClipBtn>
        <Button size={'large'} typeBtn={'contained'} action={'simple'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'add'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'ghost'} action={'simple'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} action={'add'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'simple'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} action={'add'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} disabled={true}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} disabled>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} disabled>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'contained'} color={'purple'}>
            Начать обучение
        </Button>
        <Input placeholder={'Placeholder'} inputSize={'large'} state={'default'} type={'text'} label={"Label"} hint={"hint"}/>
        <Input placeholder={'Placeholder'} inputSize={'small'} state={'default'} type={'text'} label={"Label"} hint={"hint"}/>
        <Input placeholder={'Placeholder'} inputSize={'large'} state={'default'} type={'password'} label={"Label"} hint={"hint"}/>
        <Input placeholder={'Placeholder'} inputSize={'large'} state={'errorFilled'} type={'text'} label={"Label"} hint={"hint"}/>
        <Input placeholder={'Placeholder'} inputSize={'large'} state={'successFilled'} type={'text'} label={"Label"} hint={"hint"}/>
    </>
  );
}

export default withMainPageLayout(Home);