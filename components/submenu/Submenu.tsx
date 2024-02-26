'use client'
import React, {JSX, useState} from 'react';
import styles from './Submenu.module.css'
import {SubmenuProps} from "@/components/submenu/Submenu.props";
import ChevronDown from '@/public/submenu/chevron-down.svg'
import Triangle from '@/public/submenu/triangle.svg'
import cn from "classnames";
import Link from "next/link";


const Submenu = ({children}: SubmenuProps): JSX.Element => {
    const [activeSubmenu, setActiveSubmenu] = useState<boolean>(false)


    return (
        <div className={cn(styles.containerSubmenu, {
            [styles.submenuActive]: activeSubmenu
        })}>
            <div className={styles.flexSubmenu}>
                {children}
                <ChevronDown
                    className={cn(styles.image, {
                        [styles.activeSubmenu]: activeSubmenu
                    })}
                    onClick={() => setActiveSubmenu(!activeSubmenu)}
                />
            </div>
            <div className={cn(styles.secretMenu, {
                [styles.secretMenuVisible]: activeSubmenu
            })}>
                <Triangle className={styles.triangle}/>
                <ul className={styles.secretMenuList}>
                    <li className={styles.secretMenuItem}>
                        <Link href={'/FAQ'}>FAQ</Link>
                    </li>
                    <li className={styles.secretMenuItem}>
                        <Link href={'/contacts'}>Контакты</Link>
                    </li>
                    <li className={styles.secretMenuItem}>
                        <Link href={'/termsOfPayment'}>Условия оплаты</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Submenu;