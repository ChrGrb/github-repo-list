import React from 'react';
import { Repository } from '../types/graphql';

type Props = {
    repository: Repository
};

const RepositoryCard = ({ repository }: Props) => {
    return (
        <a href={repository.url}>
            <span className="flex justify-between w-full rounded-md text-slate-100 px-3 my-5">
                <div className="flex-auto flex flex-col">
                    <span className="text-lg font-bold">{repository.name}</span>
                    <span>{repository.description ?? ""}</span>
                    <div className="h-3"></div>
                    <div className="flex justify-start gap-3">
                        <div className="flex gap-2 rounded-full bg-slate-100 text-slate-500 px-2 py-1">
                            <div className="h-2 w-2 rounded-full bg-cyan-700 my-auto"></div>
                            <span className="text-xs">{repository.primaryLanguage.name}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="flex gap-2 bg-slate-100 text-slate-500 font-light px-3 py-1 rounded-md hover:bg-green-300 hover:text-slate-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <span>Star</span>
                    </button>
                </div>

            </span>
        </a>
    );
};

export default RepositoryCard;