import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CourseItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    idCourse?: number
    title: string,
    language: 'Немецкий' | 'Китайский' | 'Испанский' | 'Английский'
    duration: number,
    quantityModules: number,
    price: number
}