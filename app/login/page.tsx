'use client'
import React, {useState} from 'react';
import styles from './page.module.css'
import Logo from '../../public/login/logo.svg'
import ButtonSocial from "@/shared/ui-kit/ButtonSocial/ButtonSocial";
import Link from "next/link";
import door from '../../public/login/door.png'
import Image from "next/image";
import Htag from "@/shared/ui-kit/Htag/Htag";
import Ptag from "@/shared/ui-kit/P/Ptag";
import Input from "@/shared/ui-kit/Input/Input";
import Button from "@/shared/ui-kit/Button/Button";
import {useDispatch} from "react-redux";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";
import {actions as tokenUtilsActions} from "@/processes/redux/FeaturesCourses/TokenUtils.slice.ts";
import {useRouter} from "next/navigation";

interface Token{
    token: string
    user: any
}

const Page = () => {
    const[data, setData] = useState({
        fullName: "",
        password: "",
    })
    const dispatch = useDispatch()
    const router = useRouter()

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            fullName: event.target.value
        })
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            password: event.target.value
        })
    }

    async function handleClick(){
        localStorage.clear()

        const res = await fetch("http://localhost:8080/api/v1/apps/auth", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.ok){
            const json: Token = await res.json()
            if (json.token){
                dispatch(tokenUtilsActions.saveToken(json.token))
            }

            const {
                id,
                fullName,
                password,
                phoneNumber,
                email,
                gender,
                login,
                birthday,
                confirmPassword,
                languageCourses,
                roles
            } = json.user
            dispatch(userActions.addUser({
                id,
                fullName,
                password,
                phoneNumber,
                email,
                gender,
                login,
                birthday,
                confirmPassword,
                languageCourses,
                roles
            }))
            router.push("/")
        }
    }

    return (
        <div className={styles.block}>
            <div className={styles.contentLogin}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className={styles.loginTitle}>
                    <Htag type={'h2-titleBlock'}>
                        Вход в кабинет
                    </Htag>
                    <Ptag type={'medium'}>
                        Введите данные учётной записи
                    </Ptag>
                </div>
                <div className={styles.loginActions}>
                    <Input placeholder={'Test или test@mail.ru'} inputSize={'small'} state={'default'} type={'tel'} label={'Логин или e-mail'} onChange={handleFullNameChange}/>
                    <Input placeholder={'Password'} inputSize={'small'} state={'default'} type={'password'} label={'Пароль'} onChange={handlePasswordChange}/>
                    <Button onClick={handleClick} size={'large'} typeBtn={'contained'} color={'purple'} className={styles.continue}>
                        Продолжить
                    </Button>
                </div>
                <div className={styles.or}>
                    <span className={styles.orLeft}></span><span className={styles.orContent}>или</span><span className={styles.orRight}></span>
                </div>
                <div className={styles.registration}>
                    <Ptag type={'medium'}>
                        Если вы не зарегистрировались, нажмите на кнопку
                    </Ptag>
                    <Link href={'/registration'}>
                        <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.registrationButton}>
                            Зарегистрироваться
                        </Button>
                    </Link>
                </div>
            </div>
            <Image src={door} alt={'LoginPage'}/>
        </div>
    );
};

export default Page;