import cs from 'classnames';
import React, { InputHTMLAttributes, MutableRefObject } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, React.PropsWithChildren {
    variant?: "Primary"
    ref?: MutableRefObject<HTMLInputElement | null>;
}

const { PrimaryTheme } = {
    PrimaryTheme:
        "w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs",
};

export const Input: React.FunctionComponent<InputProps> = (props) => {
    switch (props.variant) {
        case "Primary":
            return <input className={cs(PrimaryTheme)} {...props} />;
        default:
            return <input className={cs(PrimaryTheme)} {...props} />;
    }
}