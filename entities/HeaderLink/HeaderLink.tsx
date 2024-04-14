'use client'
import React, {JSX, useEffect, useState} from 'react';
import styles from './HeaderLink.module.css'
import Link from "next/link";
import {HeaderLinkProps} from "@/entities/HeaderLink/HeaderLink.props";
import cn from "classnames";
import {usePathname, useSearchParams} from "next/navigation";

const HeaderLink = ({children, href, className}: HeaderLinkProps): JSX.Element => {
    const[active, setActive] = useState<boolean>(false)
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}${searchParams}`
        if(url.includes(href)){
            setActive(!active)
        }
    }, [pathname, searchParams])

    return (
        <div className={cn(styles.containerHeaderLink, {
            [styles.linkActiveLine]: active
        })}>
            <Link
                className={cn(styles.link, className, {
                    [styles.linkActive]: active
                })}
                href={href}
            >
                {children}
            </Link>
        </div>
    );
};

export default HeaderLink;