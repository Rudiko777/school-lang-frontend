'use client'
import {createContext, ReactNode, SetStateAction, useState, Dispatch, useContext, useCallback} from "react";

interface IToggleContext{
    isOn: boolean,
    setIsOn: Dispatch<SetStateAction<boolean>>
}

const ToggleContext = createContext<IToggleContext>({ isOn: false, setIsOn: () => {}})


const ToggleCompound = ({children, initialValue}: {
    children: ReactNode,
    initialValue: boolean
}) => {
    const [isOn, setIsOn] = useState(initialValue)

    const switchIsOn = useCallback((newIsOn: boolean) =>
        setIsOn(newIsOn), []
    )

    return(
        <ToggleContext.Provider value={{isOn, setIsOn}}>
            {children}
        </ToggleContext.Provider>
    )
}

ToggleCompound.TextOn = function TextOn(){
    const {isOn} = useContext(ToggleContext)

    if (!isOn){
        return null
    }

    return <span>On</span>
}

ToggleCompound.TextOff = function TextOff(){
    const {isOn} = useContext(ToggleContext)

    if (isOn){
        return null
    }

    return <span>Off</span>
}

ToggleCompound.SwitchButton = function SwitchButton(){
    const {isOn, setIsOn} = useContext(ToggleContext)

    return <button onClick={() => setIsOn(isOn => !isOn)}>
        {isOn ? "switch to off" : "switch to on"}
    </button>
}

export default function CompoundComponent(){
    return(
        <div>
            <ToggleCompound initialValue={false}>
                <ToggleCompound.TextOn />
                <ToggleCompound.TextOff />
                <ToggleCompound.SwitchButton />
            </ToggleCompound>
        </div>
    )
}


