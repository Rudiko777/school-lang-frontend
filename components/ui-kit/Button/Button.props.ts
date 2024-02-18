import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import {StaticImageData} from "next/image";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    size: 'large' | 'medium' | 'small',
    typeBtn: 'contained' | 'outlined' | 'ghost'
    action?: 'simple' | 'add',
    color?: 'purple' | 'red' | 'blue',
    disabled?: boolean
}