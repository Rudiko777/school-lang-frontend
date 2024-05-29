import React, {FunctionComponent, JSX, ReactNode} from "react";
import styles from "@/layouts/AccountLayout/AccountLayout.module.css";
import AccountSidebar from "@/templates/AccountSidebar/AccountSidebar.tsx";
import AdminSidebar from "@/templates/AdminSidebar/AdminSidebar.tsx";

interface AdminLayoutProps{
    children: ReactNode
}

export const AdminLayout = ({children}: AdminLayoutProps) => {
    return(
        <>
            <div className={styles.wrapper}>
                <AdminSidebar/>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export const withAdminLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withAdminLayoutComponent(props: T): JSX.Element{
        return (
            <AdminLayout>
                <Component {...props}/>
            </AdminLayout>
        )
    }
}