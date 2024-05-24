import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    type: 'large-desc' | 'large-adv' | 'medium' | 'small' | 'titleCard' | 'descSupport'
}