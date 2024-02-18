import React, {FunctionComponent, JSX} from 'react';
import styles from './MainPageLayout.module.css'
import {MainPageLayoutProps} from "@/layouts/MainPageLayout.props";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const MainPageLayout = ({children}: MainPageLayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <div className={styles.mainWrapper}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withMainPageLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withMainLayoutComponent(props: T): JSX.Element{
        return (
            <MainPageLayout>
                <Component {...props}/>
            </MainPageLayout>
        )
    }
}
