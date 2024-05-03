import React, {FunctionComponent, JSX} from 'react';
import {AccountLayoutProps} from "@/layouts/AccountLayout/AccountLayout.props";
import styles from './AccountLayout.module.css'
import AccountSidebar from "@/templates/AccountSidebar/AccountSidebar";

const AccountLayout = ({children}: AccountLayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <AccountSidebar className={styles.sidebar}/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export const withAccountLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withAccountLayoutComponent(props: T): JSX.Element{
        return (
            <AccountLayout>
                <Component {...props}/>
            </AccountLayout>
        )
    }
}