import React, {DetailedHTMLProps, InputHTMLAttributes, JSX, ReactNode} from "react";
import cn from "classnames";
import styles from "./RadioBtn.module.css"
import {IRadioBtn} from "@/shared/ui-kit/Radio/RadioBtn.props";

const RadioBtn = ({ children, func, onChange, disable, groupName, className, ...props }: IRadioBtn): JSX.Element => {
    const handleClick = () => {
        if(children) {
            func(children.toString());
        }
    };

    return (
        <label className={cn(styles.wrapper, className)}>
            <input
                className={styles.radio}
                type="radio"
                name={groupName}
                disabled={disable}
                onClick={handleClick}
                {...props}
            />
            <p className={styles.text}>
                {children}
            </p>
        </label>
    )
}

export default RadioBtn;