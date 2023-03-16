import React from 'react';

type Props = {};

const Button: React.FC<Props> = () => {
    return (
        <button className="inline-block rounded border border-slate-600 bg-slate-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-slate-600 focus:outline-none focus:ring active:text-slate-500"
        >Click me</button>
    );
}

export default Button;

