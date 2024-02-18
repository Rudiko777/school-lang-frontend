import React, {JSX} from 'react';
import {HeaderProps} from "@/components/Header/Header.props";

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <header className={className}>
            header
        </header>
    );
};

export default Header;