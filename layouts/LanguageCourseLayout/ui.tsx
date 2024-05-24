import React, {FunctionComponent, JSX} from 'react';
import {AccountLayoutProps} from "@/layouts/AccountLayout/AccountLayout.props.ts";
import styles from '../../app/_styles/LanguageCourseLayout.module.css'
import Header from "@/templates/Header/Header.tsx";
import Footer from "@/templates/Footer/Footer.tsx";


export const LanguageCourseLayout = ({children}: AccountLayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLanguageCourseLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLanguageCourseLayoutComponent(props: T): JSX.Element{
        return (
            <LanguageCourseLayout>
                <Component {...props}/>
            </LanguageCourseLayout>
        )
    }
}