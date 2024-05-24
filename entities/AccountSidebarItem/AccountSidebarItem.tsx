import React, {JSX, useCallback, useEffect, useState} from "react";
import styles from './AccountSidebarItem.module.css'
import cn from 'classnames'
import {AccountSidebarItemProps} from "@/entities/AccountSidebarItem/AccountSidebarItem.props";
import Htag from "@/shared/ui-kit/Htag/Htag";
import House from '../../public/sidebar/HouseSimple.svg'
import Courses from '../../public/sidebar/NotePencil.svg'
import Archive from '../../public/sidebar/Archive.svg'
import Chats from '../../public/sidebar/ChatCenteredText.svg'
import Note from '../../public/sidebar/NotePencil.svg'
import Settings from '../../public/sidebar/Gear.svg'
import Features from '../../public/sidebar/Like.svg'
import {usePathname} from "next/navigation";
import Link from "next/link";

export const AccountSidebarItem = ({content, ...props}: AccountSidebarItemProps): JSX.Element => {
    const[active, setActive] = useState(false)
    const[href, setHref] = useState<string>('')
    const path = usePathname()

    const switchHref = useCallback((href: any) => {
        setHref(href)
    }, [])

    useEffect(() => {
        switch (content) {
            case "Главная":
                switchHref("/lk")
                break
            case "Курсы":
                switchHref("/lk/courses")
                break
            case "Дополнительные материалы":
                switchHref("/lk/materials")
                break
            case "Чаты":
                switchHref("/lk/chats")
                break
            case "Блог / Новости":
                switchHref("/lk/blogAndNews")
                break
            case "Настройки аккаунта":
                switchHref("/lk/settings")
                break
            case "Избранное":
                switchHref("/lk/features")
                break
            default:
                break
        }
    }, [])

    useEffect(() => {
        if (path === href){
            setActive(true)
        }
    }, [href]);

    return (
        <>
            <li className={cn(styles.transparent, {
                [styles.active]: active
            })} {...props}>
                <Link className={styles.container} href={href}>
                    {
                        content === "Главная" ? <House className={active ? styles.activeHomeImg : undefined}/> :
                            content === "Курсы" ? <Courses className={active ? styles.activeArticleImg : undefined}/> :
                                content === "Дополнительные материалы" ? <Archive className={active ? styles.activeLikeImg : undefined}/> :
                                    content === "Чаты" ? <Chats className={active ? styles.activeSettingsImg : undefined}/> :
                                        content === "Блог / Новости" ? <Note className={active ? styles.activeBlogs : undefined}/> :
                                            content === "Настройки аккаунта" ? <Settings className={active ? styles.activeSettings : undefined}/> :
                                                content === "Избранное" ? <Features className={active ? styles.activeLikes : undefined}/> : null
                    }
                    <Htag type={'h3-sidebar'}>
                        {content}
                    </Htag>
                </Link>
            </li>
        </>
    )
}