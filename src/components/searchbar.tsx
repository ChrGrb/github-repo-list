import React from 'react';

type Props = {};

const Searchbar: React.FC<Props> = () => {
    return (
        <>
            <span className="px-3 py-1 rounded-md border-2 border-transparent bg-slate-400 text-slate-200 w-full flex justify-between gap-5 focus-within:border-2 focus-within:border-blue-500 transition-colors">
                <input className="flex-auto placeholder-slate-200 bg-slate-400 focus:outline-none" placeholder="Start searching..." type="text"></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
        </>
    );
}

export default Searchbar;