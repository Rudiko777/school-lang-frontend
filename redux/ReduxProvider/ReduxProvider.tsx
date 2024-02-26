'use client'
import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "@/redux/store";

interface IReduxProvider{
    children: ReactNode
}

const ReduxProvider = ({children}: IReduxProvider) => {
    return <Provider store={store}>{children}</Provider>
};

export default ReduxProvider;