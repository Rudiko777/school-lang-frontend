'use client'
import React, {useState} from 'react';
import styles from './page.module.css'
import Htag from "@/shared/ui-kit/Htag/Htag";
import {withMainPageLayout} from "@/layouts/MainLayout/MainPageLayout.tsx";
import support from '../../public/mainPage/supportImg.png'
import Image from "next/image";
import Ptag from "@/shared/ui-kit/P/Ptag.tsx";
import Input from "@/shared/ui-kit/Input/Input.tsx";
import Textarea from "@/shared/ui-kit/Textarea/Textarea.tsx";
import Button from "@/shared/ui-kit/Button/Button.tsx";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses.ts";
import Link from "next/link";
import {json} from "stream/consumers";
import {useRouter} from "next/navigation";

const Page = () => {
    const [fullName, setFullName] = useState("");
    const [tel, setTel] = useState("");
    const [description, setDescription] = useState("");
    const token = useTypedSelector(state => state.token?.token)
    const router = useRouter()

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

    const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        const data = {
            fullName: fullName,
            telephone: tel,
            description: description
        }

        fetch("http://localhost:8080/api/v1/support/save_supportApplication", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => router.push("/support"))
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Htag type={"h2-titleBlock"}>
                    Служба поддержки<br/><span className={styles.langTitle}>Language to go</span>
                </Htag>
                <Ptag type={"descSupport"} className={styles.descSupport}>
                    Если у вас возникли трудности по работе сайта, сложности в оплате или есть вопрос, вы можете обратиться в службу поддержки, мы обязательно вам поможем.
                </Ptag>
                <Htag type={"h3-titleAdv"} className={styles.allinfo}>
                    Общая информация
                </Htag>
                <Ptag type={"titleCard"} className={styles.allInfoDesc}>
                    Ясность нашей позиции очевидна: консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. Являясь всего лишь частью общей картины, явные признаки победы институционализации подвергнуты целой серии независимых исследований.
                </Ptag>
                <div className={styles.formSupportContainer}>
                    <Htag type={"h3-titleAdv"}>
                        Написать в службу поддержки
                    </Htag>
                    <Ptag type={"titleCard"} className={styles.formSupportDesc}>
                        Оставьте заявку и мы постараемся вам помочь
                    </Ptag>
                    <div className={styles.form}>
                        <Input onChange={handleFullNameChange} className={styles.name} placeholder={"Артемий"} inputSize={"large"} state={"default"} type={"text"} label={"Имя"}/>
                        <Input onChange={handleTelChange} className={styles.tel}  placeholder={"+7 (___) ___-__-__"} inputSize={"large"} state={"default"} type={"tel"} label={"Телефон"}/>
                        <Textarea onChange={handleDescriptionChange} className={styles.place} state={"default"} placeholder={"Расскажите нам о возникшем вопрос"}/>
                    </div>
                    {
                        token ? <Button onClick={handleSubmit} size={"large"} typeBtn={"contained"} color={"purple"}>
                            Оставить заявку
                        </Button> : <Link href={"/login"}>
                            <Button size={"large"} typeBtn={"contained"} color={"purple"}>
                                Войти в систему
                            </Button>
                        </Link>
                    }
                </div>
            </div>
            <Image className={styles.img} src={support} alt={"supportImage"} width={300}/>
        </div>
    );
};

export default withMainPageLayout(Page);