import {DetailedHTMLProps, HTMLAttributes, TextareaHTMLAttributes} from "react";

export interface TextareaProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    state: string,
    hint?: string,
    label?: string,
    type?: string,
    value?: string,
    placeholder: string
    onChange?: any,
}