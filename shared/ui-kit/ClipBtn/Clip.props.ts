import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ClipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode
}