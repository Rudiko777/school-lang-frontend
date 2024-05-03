import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    name: string,
    label: string,
    placeholder: string,
    hint?:  string,
    value?: string
}