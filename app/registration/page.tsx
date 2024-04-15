'use client'
import React, {useEffect, useState} from 'react';
import {withRegistrationLayout} from '../../layouts/RegistrationLayout/RegistrationLayout'
import Logo from '../../public/login/logo.svg'
import Link from "next/link";
import styles from './page.module.css'
import Htag from "@/shared/ui-kit/Htag/Htag";
import Ptag from "@/shared/ui-kit/P/Ptag";
import Input from "@/shared/ui-kit/Input/Input";
import Button from "@/shared/ui-kit/Button/Button";
import RadioBtn from "@/shared/ui-kit/Radio/RadioBtn";

const Page = () => {
    const[fullName, setFullName] = useState('')
    const[birthday, setBirthday] = useState('')
    const[email, setEmail] = useState('')
    const[gender, setGender] = useState('')
    const[telephoneNumber, setTelephoneNumber] = useState('')
    const[login, setLogin] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState("genders");

    const handleGenderChange = (variable: string) => {
        setGender(variable);
    };

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
    }

    const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleTelephoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelephoneNumber(event.target.value)
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
    }

    const handleClick = () => {
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("phoneNumber", telephoneNumber);
        formData.append("birthday", birthday);
        formData.append("gender", gender);
        formData.append("login", login);
        formData.append("email", email)


        fetch("http://localhost:8080/api/v1/apps/registration", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = "/login"
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    }

    return (
        <div className={styles.content}>
            <Link href={'/'}>
                <Logo/>
            </Link>
            <div className={styles.registrationTitle}>
                <Htag type={'h2-titleBlock'}>
                    Регистрация
                </Htag>
                <Ptag type={'medium'}>
                    Введите данные учётной записи
                </Ptag>
            </div>
            <div className={styles.registrationActions}>
                <Input placeholder={"Иван Иванов"} inputSize={'small'} state={'default'} type={'text'} label={"Полное имя"} onChange={handleFullNameChange}/>
                <Input placeholder={"12-10-2004"} inputSize={'small'} state={'default'} type={'text'} label={"Дата рождения"} onChange={handleBirthdayChange}/>
                <Input placeholder={"ivanov@mail.ru"} inputSize={'small'} state={'default'} type={'email'} label={"E-mail"} onChange={handleEmailChange}/>
                <div className={styles.gendersBlock}>
                    <RadioBtn groupName={name} func={handleGenderChange}>
                        Мужчина
                    </RadioBtn>
                    <RadioBtn groupName={name} func={handleGenderChange}>
                        Женщина
                    </RadioBtn>
                </div>
                <Input placeholder={"89189115259"} inputSize={'small'} state={'default'} type={'tel'} label={"Номер телефона"} onChange={handleTelephoneNumberChange}/>
                <Input placeholder={"Ivanov"} inputSize={'small'} state={'default'} type={'text'} label={"Логин"} onChange={handleLoginChange}/>
                <Input placeholder={"Password"} inputSize={'small'} state={'default'} type={'password'} label={"Пароль"} onChange={handlePasswordChange}/>
                <Input placeholder={"Confirm password"} inputSize={'small'} state={'default'} type={'password'} label={"Пароль"} onChange={handleConfirmPasswordChange}/>
            </div>
            <Button size={"large"} typeBtn={"contained"} onClick={handleClick} color={"purple"}>
                Отправить
            </Button>
        </div>
    );
};

export default withRegistrationLayout(Page);