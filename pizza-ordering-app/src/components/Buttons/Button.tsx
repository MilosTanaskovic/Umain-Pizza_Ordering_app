import React from 'react'
import clsx from 'clsx';
import './Button.css';

interface Props {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    target?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
    reverse?: boolean
}

const Button: React.FC<Props> = ({children, onClick, className, reverse}) => {
    return (
        <button 
            className={clsx(className, 'button')} 
            onClick={onClick}
            style={{ backgroundColor: reverse ? 'inherit' : '#333' }}
        >
            {children}
        </button>
    )
}
export default Button;
