import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from 'react';
import styles from './CheckBox.module.css'
import cn from "classnames";

interface ICheckBox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    isChecked: boolean,
    children: ReactNode
}

const CheckBox = ({isChecked, children, className, ...props}: ICheckBox) => {
    return (
        <label className={cn(styles.wrapper, className)}>
            <input
                type={"checkbox"}
                checked={isChecked}
                className={styles.checkBox}
                {...props}
            />
            <p className={styles.text}>{children}</p>
        </label>
    );
};

export default CheckBox;