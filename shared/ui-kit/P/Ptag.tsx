import React, {JSX} from 'react';
import styles from './Ptag.module.css'
import {PProps} from "@/shared/ui-kit/P/Ptag.props";
import cn from "classnames";

const Ptag = ({children, type, className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.largeDesc]: type === 'large-desc',
            [styles.largeAdv]: type === 'large-adv',
            [styles.medium]: type === 'medium',
            [styles.small]: type === 'small'
        })}>
            {children}
        </p>
    );
};

export default Ptag;