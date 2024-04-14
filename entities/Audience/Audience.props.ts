import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AudienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id: string
    whom: string,
    description: string,
    image: string
}