import React, {JSX} from 'react';
import {HeaderProps} from "@/components/Header/Header.props";
import cn from "classnames";
import styles from './Header.module.css'
import Logo from '@/public/header/logo.svg'
import HeaderLink from "@/components/Header/HeaderLink/HeaderLink";
import Submenu from "@/components/submenu/Submenu";
import Button from "@/components/ui-kit/Button/Button";
import Link from "next/link";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
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
            <Link href={'/login'}>
                <Button size={'medium'} typeBtn={'contained'} color={'purple'} className={styles.loginBtn}>
                    Войти
                </Button>
            </Link>
        </header>
    );
};

export default Header;