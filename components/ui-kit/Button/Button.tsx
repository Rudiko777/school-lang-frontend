'use client'
import React, {JSX, useCallback, useState} from 'react';
import styles from './Button.module.css'
import cn from 'classnames'
import {ButtonProps} from "@/components/ui-kit/Button/Button.props";
import Plus from '@/public/button/plus.svg'

const Button = ({children, size, typeBtn, action, color, disabled, className, ...props}: ButtonProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false)
    // const [hover, setHover] = useState<boolean>(false)

    return (
        <button className={cn(styles.button, className, {
            [styles.colorPurple]: color === 'purple',
            [styles.colorRed]: color === 'red',
            [styles.colorBlue]: color === 'blue',
            [styles.largeButton]: size === 'large',
            [styles.mediumButton]: size === 'medium',
            [styles.smallButton]: size === 'small',
            [styles.outlinedPurple]: typeBtn === 'outlined' && color === 'purple',
            [styles.outlinedRed]: typeBtn === 'outlined' && color === 'red',
            [styles.outlinedBlue]: typeBtn === 'outlined' && color === 'blue',
            [styles.ghostPurple]: typeBtn === 'ghost' && color === 'purple',
            [styles.ghostRed]: typeBtn === 'ghost' && color === 'red',
            [styles.ghostBlue]: typeBtn === 'ghost' && color === 'blue',
            [styles.disabledContained]: disabled && typeBtn === 'contained',
            [styles.disabledOutlined]: disabled && typeBtn === 'outlined',
            [styles.disabledGhost]: disabled && typeBtn === 'ghost',
            [styles.activePurpleContained]: active && color === 'purple' && typeBtn === 'contained',
            [styles.activePurpleOutlined]: active && color === 'purple' && typeBtn === 'outlined',
            [styles.activePurpleGhost]: active && color === 'purple' && typeBtn === 'ghost',
            [styles.activeRedContained]: active && color === 'red' && typeBtn === 'contained',
        })} disabled={disabled}
                onClick={() => setActive(!active)}
                type={'button'}
                // onMouseOver={() => setHover(true)}
                // onMouseOut={() => setHover(false)}
                {...props}>
            <div className={cn(styles.buttonContent)}>
                {children}
                {
                    action === 'add' ? <Plus className={cn({
                        [styles.purpleSVG]: (typeBtn === "outlined" || typeBtn === 'ghost') && color === 'purple',
                        [styles.redSVG]: (typeBtn === "outlined" || typeBtn === 'ghost') && color === 'red',
                        [styles.blueSVG]: (typeBtn === "outlined" || typeBtn === 'ghost') && color === 'blue',
                        [styles.disabledSVG]: disabled && (typeBtn === "outlined" || typeBtn === 'ghost'),
                        // [styles.outlinedPurpleHover]: hover && color === 'purple' && typeBtn === 'outlined'
                    })}/> : null
                }
            </div>
        </button>
    );
};

export default Button;