import cs from 'classnames';
import React, { InputHTMLAttributes, MutableRefObject } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, React.PropsWithChildren {
    variant?: "Primary" | "Search"
    ref?: MutableRefObject<HTMLInputElement | null>;
}

const { PrimaryTheme, SearchTheme } = {
    PrimaryTheme:
        "w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs",
    SearchTheme:
        "bg-gray-400 p-2 text-lg focus:bg-gray-200 outline-none rounded-lg placeholder:text-sm placeholder:text-black"
};

export const Input: React.FunctionComponent<InputProps> = (props) => {
    switch (props.variant) {
        case "Primary":
            return <input className={cs(PrimaryTheme)} {...props} />;
        case "Search":
            return <input className={cs(SearchTheme)} {...props} />;
        default:
            return <input className={cs(PrimaryTheme)} {...props} />;
    }
}