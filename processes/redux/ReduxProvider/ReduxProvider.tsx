'use client'
import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {persister, store} from "@/processes/redux/store";
import {PersistGate} from "redux-persist/integration/react";

interface IReduxProvider{
    children: ReactNode
}

const ReduxProvider = ({children}: IReduxProvider) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister} >
                {children}
            </PersistGate>
        </Provider>
    )

};

export default ReduxProvider;