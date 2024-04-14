import React, {ButtonHTMLAttributes, ChangeEventHandler, DetailedHTMLProps, MouseEventHandler, useState} from 'react';
import styles from './ButtonAccordion.module.css'
import cn from "classnames";
import Plus from '../../../public/button/acordButton.svg'


interface ButtonAccordionProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    state: boolean,
}

const ButtonAccordion = ({className, state, ...props}: ButtonAccordionProps) => {


    return (
        <button className={cn(styles.btn, className, {
            [styles.active]: state,
        })} {...props}>
            <Plus className={cn(styles.plus,{
                [styles.plusActive]: state
            })}/>
        </button>
    );
};

export default ButtonAccordion;