import React, {JSX} from 'react';
import styles from './Textarea.module.css'
import {TextareaProps} from "@/shared/ui-kit/Textarea/Textarea.props";
import cn from 'classnames'

const Textarea = ({name, label, className, value, hint, placeholder, ...props}: TextareaProps): JSX.Element => {


    return (
        <div className={styles.wrapper}>
            {!label || label === "" || label === undefined ? (
                <></>
            ) : (
                <label
                    className={cn(styles.label, {
                    })}
                    htmlFor={name}
                >
                    {label}
                </label>)}
            <div>
          <textarea
              id={name}
              className={cn(styles.input, {
                  [styles.default]: state === "default",
                  [styles.filled]: isFilled,
                  [styles.error_filled]: state === "error-filled",
                  [styles.disabled_empty]: isDisabledEmpty,
                  [styles.disabled_filled]: isDisabledFilled,
                  className
              })}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              readOnly={isDisabledEmpty || isDisabledFilled}
              rows={1}
              {...props}
          />
            </div>
            {!hint || hint === "" || hint === undefined ? (
                <></>
            ) : (
                <p
                    className={cn(styles.p, className, {
                        [styles.p_default]: state === "default",
                        [styles.p_focus]: isFocused,
                        [styles.p_filled]: isFilled,
                        [styles.p_error_filled]: state === "error-filled",
                        [styles.p_disabled_empty]: state === "disabled-empty",
                        [styles.p_disabled_filled]: state === "disabled-filled",
                    })}
                    {...props}
                >
                    {hint}
                </p>
            )}
        </div>
    );
};

export default Textarea;