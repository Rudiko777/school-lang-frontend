'use client'
import React, {JSX, useEffect, useState} from 'react';
import {HeaderProps} from "@/templates/Header/Header.props";
import cn from "classnames";
import styles from './Header.module.css'
import Logo from '@/public/header/logo.svg'
import HeaderLink from "@/entities/HeaderLink/HeaderLink";
import Submenu from "@/shared/ui-kit/submenu/Submenu";
import Button from "@/shared/ui-kit/Button/Button";
import Link from "next/link";
import {router} from "next/client";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const[item, setItem] = useState<string | null>('')

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        setItem(localStorage.getItem("token"))
    }, []);

    function logout() {
        localStorage.removeItem("token")
        window.location.href = "/"
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
                {
                    item !== null ? <Link href={"/lk"}>Личный кабинет</Link> : null
                }
                {
                    item !== null ? <Link href={"/"} onClick={logout}>Logout</Link> : null
                }
            </nav>
            {item == null ? <Link href={'/login'}>
                <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                    Войти
                </Button>
            </Link> : null
            }
            {item == null ? <Link href={"/registration"}>
                    <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                        Зарегистрироваться
                    </Button>
                </Link> : null
            }
        </header>
    );
};

export default Header;