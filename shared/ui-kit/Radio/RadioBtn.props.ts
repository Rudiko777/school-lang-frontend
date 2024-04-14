import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";

export interface IRadioBtn extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    children: ReactNode,
    disable?: boolean,
    groupName: string,
    func: (s: string) => void
}