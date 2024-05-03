'use client'
import React, {JSX, useCallback, useEffect, useState} from 'react';
import {HeaderProps} from "@/templates/Header/Header.props";
import cn from "classnames";
import styles from './Header.module.css'
import Logo from '@/public/header/logo.svg'
import HeaderLink from "@/entities/HeaderLink/HeaderLink";
import Submenu from "@/shared/ui-kit/submenu/Submenu";
import Button from "@/shared/ui-kit/Button/Button";
import Link from "next/link";
import {router} from "next/client";
import {useDispatch} from "react-redux";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";
import {actions, actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {
    ILanguageCourses,
    useGetLanguageCourseByIdQuery,
    useGetLanguageCoursesQuery
} from "@/processes/redux/api/LanguageCoursesAPI";
import {useLoadByData} from "@/shared/hooks/useLoadByData";
import {useIsAdmin} from "@/shared/hooks/useIsAdmin";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const[item, setItem] = useState<string | null>(null)
    const dispatch = useDispatch()
    const isAdmin: boolean = useIsAdmin()
    // const array: number[] = useLoadByData()

    useEffect(() => {
        if (localStorage.getItem("token")){
            fetchContent().then(() => {
                setItem(localStorage.getItem("token"))
                // let array = favorites?.map((el) => el?.id)
                // user?.languageCourses.forEach((el, index) => {
                //     if (!array?.includes(el) && data){
                //         console.log("hahah")
                //         console.log(data[index])
                //         dispatch(featureActions.toggleCartCourses(data[index]))
                //     }
                // })
                // setFetched(true)
            })
        }
    }, []);

    async function fetchContent(){
        const res = await fetch("http://localhost:8080/info", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        })
        if (!res.ok) {
            localStorage.removeItem("token")
            dispatch(userActions.deleteUser())
            dispatch(featureActions.deleteFeatures())
        }

    }

    return (
        <header className={cn(styles.header, className)} {...props}>
            <Link href={'/'}>
                <Logo/>
            </Link>
            <nav className={styles.navigation}>
                <HeaderLink href={'/Catalog'}>
                    Курсы
                </HeaderLink>
                <HeaderLink href={'/AboutUs'}>
                    О нас
                </HeaderLink>
                <HeaderLink href={'/Blog'}>
                    Блог
                </HeaderLink>
                <Submenu>
                    Ещё
                </Submenu>
            </nav>
            <div className={styles.navButtons}>
                {
                    isAdmin  ? <Link href={'/admin'}>
                        <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                            Админка
                        </Button>
                    </Link> : null
                }
                {item != null ? <Link href={'/lk'}>
                    <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                        Личный кабинет
                    </Button>
                </Link> : null
                }
                {item == null ? <Link href={"/login"}>
                    <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                        Войти
                    </Button>
                </Link> : null
                }
            </div>
        </header>
    );
};

export default Header;