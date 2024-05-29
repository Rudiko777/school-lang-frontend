import React, {useCallback, useEffect, useState} from 'react';
import {AdminSidebarProps} from "@/templates/AdminSidebar/AdminSidebar.props.ts";
import cn from "classnames";
import styles from "@/templates/AccountSidebar/AccountSidebar.module.css";
import Link from "next/link";
import Logo from "@/public/login/logo.svg";
import {ADMIN_SIDEBAR_TABS as adminTabs} from "@/shared/consts";
import {AdminSidebarTab} from "@/widgets/AdminSidebarTab/AdminSidebarTab.tsx";

const AdminSidebar = ({className, ...props}: AdminSidebarProps) => {
    return (
        <aside className={cn(styles.sidebar, className)} {...props}>
            <div content={styles.logoContainer}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
            </div>
            <ul className={styles.menu}>
                {
                    adminTabs.map((el, idx) => {
                        return (
                            <AdminSidebarTab
                                key={idx}
                                content={el.title}
                                url={el.url}
                            />
                        )
                    })
                }
            </ul>
        </aside>
    );
};

export default AdminSidebar;