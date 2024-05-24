'use client'
import React, {JSX, useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
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
import {actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice";
import {useTypedSelector} from "@/processes/redux/FeaturesCourses/SelectorCourses";
import {
    ILanguageCourses,
    useGetLanguageCourseByIdQuery,
    useGetLanguageCoursesQuery
} from "@/processes/redux/api/LanguageCoursesAPI";
import {useLoadByData} from "@/shared/hooks/useLoadByData";
import {useIsAdmin} from "@/shared/hooks/useIsAdmin";
import {actions as tokenUtilsActions} from "@/processes/redux/FeaturesCourses/TokenUtils.slice.ts";
import {useIsTokenSelector} from "@/shared/hooks/useIsTokenSelector.ts";
import {actions as scoreActions} from "@/processes/redux/FeaturesCourses/ScoreStudent.slice.ts";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const[item, setItem] = useState<string | null>(null)
    const dispatch = useDispatch()
    const isAdmin: boolean = useIsAdmin()
    const isToken: boolean = useIsTokenSelector()
    const token = useTypedSelector(state => state.token?.token)

    useLayoutEffect(() => {
        if (isToken){
            fetchContent()
                .then(() => {setItem(token)})
                .catch(() => {
                    dispatch(userActions.deleteUser())
                    dispatch(featureActions.deleteFeatures())
                    dispatch(tokenUtilsActions.clearToken())
                    dispatch(scoreActions.clearStudent())
                    setItem(null)
                })
        } else {
            dispatch(userActions.deleteUser())
            dispatch(featureActions.deleteFeatures())
            dispatch(tokenUtilsActions.clearToken())
            dispatch(scoreActions.clearStudent())
        }
    }, [isToken, token]);

    const fetchContent = useCallback(async () => {
        try {
            const res = await fetch("http://localhost:8080/info", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            });

            if (!res.ok) {
                throw new Error("Error");
            }

            // Продолжайте обработку успешного ответа здесь
        } catch (error) {
            throw new Error("Error");
        }
    }, [token]);

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