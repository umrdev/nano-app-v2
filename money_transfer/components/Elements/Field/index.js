import { forwardRef } from 'react';
import {ExclamationCircleIcon} from '@heroicons/react/outline'
import {number} from "prop-types";

const style = {
    dot: `text-red-500 pl-0.5`,
    error: `ring-red-600 ring-1`,
    disabled: `cursor-not-allowed`,
    container: `mb-4 mt-4`,
    errorMessage: `text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1`,
    checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
    checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
    iconContainer: `absolute flex border border-transparent left-0 top-0 h-full ml-4 w-7`,
    centerText : `text-center`,
    icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
    checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
    search: `form-input pl-60 bord"er-1 block hover:border-gray-400 transition duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-xl w-full  h-16 text-lg`,
    number: `form-input pl-60 bord"er-1 block hover:border-gray-400 transition duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-xl w-full  h-16 text-lg`,
    default: `form-input border-1 bg-[#80808008] block hover:border-gray-300 hover:bg-white transition duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:bg-white rounded-xl w-full p-3 h-16 text-lg`,
};

export const Field = forwardRef(
    (
        { disabled, dot, error, readOnly, icon, label, name, textCenter, onPressEnter, type = 'text', ...rest },
        ref,
    ) => {
        let component;

        // if you won't use textarea, you can delete this part
        if (type === 'textarea') {
            component = (
                <textarea
                    aria-required={dot}
                    aria-invalid={!!error}
                    className={`${style.default} ${disabled ? style.disabled : ''}
                    ${error ? style.error : 'border-gray-200'}
                    `}
                    disabled={disabled}
                    id={name}
                    name={name}
                    ref={ref}
                    readOnly={readOnly}
                    {...rest}
                />
            );
        }

        // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
        if (type === 'checkbox') {
            component = (
                <div className={style.checkboxContainer}>
                    <input
                        aria-required={dot}
                        aria-invalid={!!error}
                        className={`${style.checkbox} ${disabled ? style.disabled : ''}`}
                        disabled={disabled}
                        id={name}
                        name={name}
                        readOnly={readOnly}
                        type="checkbox"
                        {...rest}
                    />
                    <span className={style.checkboxLabel} />
                </div>
            );
        }

        if (type === 'search') {
            component = (
                <div className={style.checkboxContainer}>
                    <input
                        aria-required={dot}
                        aria-invalid={!!error}
                        className={`${style.checkbox} ${disabled ? style.disabled : ''}`}
                        disabled={disabled}
                        id={name}
                        name={name}
                        readOnly={readOnly}
                        type="search"
                        {...rest}
                    />
                    <span className={style.checkboxLabel} />
                </div>
            );
        }

        if (type === 'number') {
            component = (
                <div className={style.checkboxContainer}>
                    <input
                        aria-required={dot}
                        aria-invalid={!!error}
                        className={`${style.number} ${disabled ? style.disabled : ''} ${textCenter ? style.centerText : '' }`}
                        disabled={disabled}
                        id={name}
                        name={name}
                        readOnly={readOnly}
                        type="number"
                        {...rest}
                        onKeyDown={onPressEnter}
                    />
                    <span className={style.checkboxLabel} />
                </div>
            );
        }

        // if you won't use input, you can delete this part
        if (type !== 'checkbox' && type !== 'select' && type !== 'textarea') {
            component = (
                <div className="relative">
                    <div className={style.iconContainer}>
                        <div className={style.icon}>{icon}</div>
                    </div>
                    <input
                        aria-required={dot}
                        aria-invalid={!!error}
                        className={`${style.default} ${icon ? 'pl-12' : ''}
                           ${error ? style.error : 'border-gray-200'}
                           ${disabled ? style.disabled : ''}
                        `}
                        disabled={disabled}
                        id={name}
                        name={name}
                        type={type}
                        ref={ref}
                        readOnly={readOnly}
                        {...rest}
                    />
                    {error && <ErrorIcon />}
                </div>
            );
        }

        return (
            <div className={`${style.container} ${disabled ? 'opacity-50' : ''}`}>
                <div htmlFor={name} className="form-label mb-2 font-light text-lg text-gray-400">
                    {label}
                    {dot && <span className={style.dot}>*</span>}
                </div>
                {component}
                {error && (
                <div role="alert" className={style.errorMessage}>
                    {error}
                </div>
                )}
            </div>
        );
    },
);

Field.displayName = 'Field';

const ErrorIcon = () => (
/*    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="currentColor"
        className="absolute right-2 -mt-10 text-red-500"
        viewBox="0 0 1792 1792"
    >
        <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
    </svg>*/
<ExclamationCircleIcon className="h-6 w-6 absolute right-2 -mt-11 text-red-500" />
);