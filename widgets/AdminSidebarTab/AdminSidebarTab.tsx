'use client'
import React, {useCallback, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import cn from "classnames";
import styles from './AdminSidebarTab.module.css'
import Link from "next/link";
import House from "@/public/sidebar/HouseSimple.svg";
import Courses from "@/public/sidebar/NotePencil.svg";
import Archive from "@/public/sidebar/Archive.svg";
import Htag from "@/shared/ui-kit/Htag/Htag.tsx";
import {AdminSidebarTabProps} from "@/widgets/AdminSidebarTab/AdminSidebarTab.props.ts";

export const AdminSidebarTab = ({content, url, ...props}: AdminSidebarTabProps) => {
    const[active, setActive] = useState(false)
    const path = usePathname()

    useEffect(() => {
        if (path === url){
            setActive(true)
        }
    }, []);

    return (
        <li className={cn(styles.transparent, {
            [styles.active]: active
        })} {...props}>
            <Link className={styles.container} href={url}>
                {
                    content === "Главная" ? <House className={active ? styles.activeHomeImg : undefined}/> :
                        content === "Настройка курсов" ? <Courses className={active ? styles.activeArticleImg : undefined}/> :
                            content === "Целевая аудитория" ? <Archive className={active ? styles.activeLikeImg : undefined}/> : null
                }
                <Htag type={'h3-sidebar'}>
                    {content}
                </Htag>
            </Link>
        </li>
    )
}