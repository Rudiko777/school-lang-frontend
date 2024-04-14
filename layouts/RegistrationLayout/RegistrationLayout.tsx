import React, {FunctionComponent, JSX} from 'react';
import styles from './RegistrationLayout.module.css'
import {RegistrationLayoutProps} from "@/layouts/RegistrationLayout/RegistrationLayout.props";
import door from '../../public/login/door.png'
import Image from "next/image";

const RegistrationLayout = ({children}: RegistrationLayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
            <Image src={door} alt={"Дверь"}/>
        </div>
    );
};

export const withRegistrationLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withRegistrationLayout(props: T): JSX.Element{
        return (
            <RegistrationLayout>
                <Component {...props}/>
            </RegistrationLayout>
        )
    }
}