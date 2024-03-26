'use client'
import React, {JSX, useEffect, useState} from 'react';
import styles from './Input.module.css'
import {InputProps} from "@/components/Input/Input.props";
import cn from "classnames";
import BlockPswd from '../../public/input/block.svg'
import UnBlockPswd from '../../public/input/unBlock.svg'
import SearchIcon from '../../public/input/search.svg'
import Warning from '../../public/input/Warning.svg'
import Success from '../../public/input/Good.svg'

const Input = React.forwardRef((
    {value,
    className,
    inputSize,
    placeholder,
    state,
    label,
    type,
    hint,
    ...props}
    : InputProps, ref: React.ForwardedRef<any>): JSX.Element => {

    const[inputValue, setInputValue] = useState<string>(value || '')
    const[isFilled, setIsFilled] = useState<boolean>(!!value);
    const[isFocused, setIsFocused] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false);
    const[onMouseOver, setOnMouseOver] = useState<boolean>(false)


    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleBlur = () => {
        setIsFilled(inputValue !== "");
        setIsFocused(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const isDisabledFilled: boolean = state === 'disabledFilled'
    const isDisabledEmpty: boolean = state === 'disabledEmpty'

    useEffect(() => {
        setIsFilled(!!inputValue);
    }, [inputValue]);

    return (
        <>
            <div className={cn(styles.inputWrapper)}>
                {!label || label === '' || label === undefined ? (<></>) :
                    (<label className={cn(styles.label, {
                        [styles.focusLabel]: isFocused,
                        [styles.disabledLabel]: (state === 'disabledEmpty' || state === 'disabledFilled')
                    })}>
                        {label}
                    </label>)
                }
                <div className={styles.inputContainer}>
                    <input
                        type={showPassword || type === 'choose' ? "text" : type}
                        className={cn(styles.input, {
                            [styles.focusDefaultInput]: isFocused && !isFilled && state === 'default',
                            [styles.focusErrorInput]: isFocused && !isFilled && state === 'errorFilled',
                            [styles.focusSuccessInput]: isFocused && !isFilled && state === 'successFilled',
                            [styles.hoverErrorInput]: onMouseOver && state === 'errorFilled' && !isFocused,
                            [styles.hoverSuccessInput]: onMouseOver && state === 'successFilled'&& !isFocused,
                            [styles.disabledFilled]: isDisabledFilled,
                            [styles.disabledEmpty]: isDisabledEmpty,
                            [styles.default]: state === 'default',
                            [styles.errorFilled]: state === 'errorFilled',
                            [styles.successFilled]: state === 'successFilled',
                            [styles.inputLarge]: inputSize === 'large',
                            [styles.inputSmall]: inputSize === 'small',
                        })}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseOver={() => setOnMouseOver(true)}
                        onMouseOut={() => setOnMouseOver(false)}
                        readOnly={isDisabledFilled || isDisabledEmpty}
                        ref={ref}
                        {...props}
                    />
                    {
                        state === 'errorFilled' ? (
                            <Warning className={cn(styles.eyeIcon, styles.UnclickableIcon, {
                                [styles.eyeIconLarge]: inputSize === 'large',
                                [styles.eyeIconSmall]: inputSize === 'small'
                            })}/>
                        ) : null
                    }
                    {
                        state === 'successFilled' ? (
                            <Success className={cn(styles.eyeIcon, styles.UnclickableIcon,{
                                [styles.eyeIconLarge]: inputSize === 'large',
                                [styles.eyeIconSmall]: inputSize === 'small'
                            })}/>
                        ) : null
                    }
                    {
                        type === 'password' && !showPassword && state !== 'errorFilled' && state !== 'successFilled'? (
                            <BlockPswd className={cn(styles.eyeIcon, {
                                [styles.eyeIconLarge]: inputSize === 'large',
                                [styles.eyeIconSmall]: inputSize === 'small'
                            })} onClick={togglePasswordVisibility}/>
                        ) : type === 'password' && showPassword && state !== 'errorFilled' && state !== 'successFilled'? (
                            <UnBlockPswd className={cn(styles.eyeIcon, {
                                [styles.eyeIconLarge]: inputSize === 'large',
                                [styles.eyeIconSmall]: inputSize === 'small'
                            })} onClick={togglePasswordVisibility}/>
                        ) : null
                    }
                    {
                        type === 'search' && state !== 'errorFilled' && state !== 'successFilled'? (
                            <SearchIcon className={cn(styles.searchIcon)}/>
                        ) : null
                    }
                </div>
                {
                    !hint || hint === '' || hint === undefined ? null : (
                        <p className={cn(styles.description, {
                            [styles.hintErrorInputHover]: onMouseOver && state === 'errorFilled',
                            [styles.hintSuccessInputHover]: onMouseOver && state === 'successFilled',
                            [styles.successFilledHint]: state === 'successFilled',
                            [styles.errorFilledHint]: state === 'errorFilled'
                        })}>
                            {hint}
                        </p>
                    )
                }
            </div>
        </>
    );
});

Input.displayName = "Input"

export default Input;