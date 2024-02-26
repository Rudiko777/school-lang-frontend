import {DetailedHTMLProps, LinkHTMLAttributes, ReactNode} from "react";

export interface HeaderLinkProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>{
    children: ReactNode,
    href: '/Catalog' | '/Blog' | '/AboutUs';
}