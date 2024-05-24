'use client'
import React, {DetailedHTMLProps, HTMLAttributes, JSX, useState} from 'react';
import styles from './Avatar.module.css'
import cn from "classnames";
import Chevron from '../../public/submenu/chevron-down.svg'
import Link from "next/link";
import {useDispatch} from "react-redux";
import {actions as userActions} from "@/processes/redux/FeaturesCourses/User.slice";
import {useRouter} from "next/navigation";
import {actions as tokenUtilsActions} from "@/processes/redux/FeaturesCourses/TokenUtils.slice.ts";
import {actions as featureActions} from "@/processes/redux/FeaturesCourses/FeaturesCourses.slice.ts";
import {actions as scoreActions} from "@/processes/redux/FeaturesCourses/ScoreStudent.slice.ts";

interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    fullName: string
}

const Avatar = ({fullName, className, ...props}: AvatarProps): JSX.Element => {
    const[active, setActive] = useState<boolean>(false)
    const dispatch = useDispatch()
    const router = useRouter()

    function logout() {
        dispatch(tokenUtilsActions.clearToken())
        dispatch(userActions.deleteUser())
        dispatch(featureActions.deleteFeatures())
        dispatch(scoreActions.clearStudent())
        router.push("/")
    }

    return (
        <>
            <div className={cn(styles.wrapper, className)} {...props}>
                <span className={styles.title}>
                    <div className={styles.titleBlock}>
                        {fullName && fullName.charAt(0).toUpperCase()}
                    </div>
                </span>
                <Chevron
                    className={cn(styles.chevron, {
                        [styles.chevronActive]: active
                    })}
                    onClick={() => setActive(prevState => !prevState)}
                />
            </div>
            {
                active ? <ul className={styles.listActivities}>
                    <li>
                        <Link href={"/"} onClick={logout}>
                            Выйти
                        </Link>
                    </li>
                    <li>
                        <Link href={"/lk/settings"}>
                            Настройки
                        </Link>
                    </li>
                </ul> : null
            }
        </>
    );
};

export default Avatar;