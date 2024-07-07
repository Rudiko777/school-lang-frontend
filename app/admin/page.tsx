import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './page.module.css'
import Htag from "@/shared/ui-kit/Htag/Htag";
import {withAdminLayout} from "@/layouts/AdminLayout/AdminLayout.tsx";
import cn from "classnames";


interface AdminBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    children: ReactNode
}

const AdminBlock = ({title, children, className, ...props}: AdminBlockProps) => {
    return (
        <div className={cn(styles.adminBlock, className)} {...props}>
            <div className={styles.adminBlockTitle}>
                <Htag type={"h3-titleAdv"}>
                    {title}
                </Htag>
            </div>
            <div className={styles.adminBlockContent}>
                {children}
            </div>
        </div>
    )
}

const Page = () => {
    // const token = useTypedSelector(state => state.token)

    // async function getUserList() {
    //     try {
    //         const res = await fetch("http://localhost:8080/admin/userList", {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Bearer " + token,
    //             }
    //         });
    //         if (!res.ok) {
    //             throw new Error("Failed to fetch user list");
    //         }
    //         const json = await res.json();
    //         return json;
    //     } catch (err) {
    //         console.error(err);
    //         return null;
    //     }
    // }

    return(
        <>
            <Htag type={"h1-other"}>
                Добро пожаловать в Админ-панель
            </Htag>
            <AdminBlock title={"Список пользователей"} className={styles.adminBlockPage}>
                иуимгуимиуагмгуаимгуармгруагмугимгуаимгиуцгмигуциагми

            </AdminBlock>
        </>
    )
};

export default withAdminLayout(Page);