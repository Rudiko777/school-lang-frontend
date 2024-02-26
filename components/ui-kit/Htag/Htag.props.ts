import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children: ReactNode,
    type: 'h1-mainTitle' | 'h1-other' | 'h2-titleBlock' | 'h3-whoseLang' | 'h3-titleCard' | 'h3-titleAdv' | 'h3-footer'
}