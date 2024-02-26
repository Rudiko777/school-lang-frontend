import React, {JSX} from 'react';
import styles from './Htag.module.css'
import {HtagProps} from "@/components/ui-kit/Htag/Htag.props";
import cn from "classnames";

const Htag = ({children, type, className, ...props}: HtagProps):JSX.Element => {
    switch (type) {
        case "h1-mainTitle":
            return <h1 className={cn(styles.h1MainTitle, className)}{...props}>{children}</h1>;
        case "h1-other":
            return <h1 className={cn(styles.h1Other, className)} {...props}>{children}</h1>;
        case "h2-titleBlock":
            return <h2 className={cn(styles.h2TitleBlock, className)} {...props}>{children}</h2>;
        case 'h3-titleCard':
            return <h3 className={cn(styles.h3TitleCard, className)} {...props}>{children}</h3>;
        case 'h3-titleAdv':
            return <h3 className={cn(styles.h3TitleAdv, className)} {...props}>{children}</h3>;
        case 'h3-whoseLang':
            return <h3 className={cn(styles.h3WhoseLang, className)} {...props}>{children}</h3>;
        case 'h3-footer':
            return <h3 className={cn(styles.h3Footer, className)} {...props}>{children}</h3>
        default:
            return <></>
    }
};

export default Htag;