import React, {JSX} from 'react';
import {AccountSidebarProps} from "@/templates/AccountSidebar/AccountSidebar.props";
import styles from './AccountSidebar.module.css'
import cn from 'classnames'
import Link from "next/link";
import Logo from '../../public/login/logo.svg'
import {AccountSidebarItem} from "@/entities/AccountSidebarItem/AccountSidebarItem";

const AccountSidebar = ({className, ...props}: AccountSidebarProps): JSX.Element => {
    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <div content={styles.logoContainer}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
            </div>
            <ul className={styles.menu}>
                <AccountSidebarItem content={"Главная"} />
                <AccountSidebarItem content={"Курсы"} />
                <AccountSidebarItem content={"Избранное"}/>
                <AccountSidebarItem content={"Дополнительные материалы"}/>
                <AccountSidebarItem content={"Чаты"}/>
                <AccountSidebarItem content={"Блог / Новости"}/>
                <AccountSidebarItem content={"Настройки аккаунта"}/>
            </ul>
        </aside>
    );
};

export default AccountSidebar;