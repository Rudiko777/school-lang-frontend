import React, {JSX} from 'react';
import styles from './ClipBtn.module.css'
import {ClipProps} from "@/shared/ui-kit/ClipBtn/Clip.props";
import cn from "classnames";
import Clip from '@/public/clipBtn/play-icon.svg'

const ClipBtn = ({children, className, ...props}:ClipProps): JSX.Element => {
    return (
        <div className={styles.clipBtnBlock}>
            <div className={cn(styles.container, className)} {...props}>
                <Clip className={styles.btn}/>
                <span className={styles.clipDescription}>
                {children}
            </span>
            </div>
        </div>
    );
};

export default ClipBtn;