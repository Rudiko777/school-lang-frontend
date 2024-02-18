import React, {JSX} from 'react';
import styles from './Footer.module.css'
import {FooterProps} from "@/components/Footer/Footer.props";

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={className}>
            footerfooterfooterfooterfooterfooterfooterfooterfooterfooterfooter
        </footer>
    );
};

export default Footer;