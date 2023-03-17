import React from 'react';
import { Repository } from '@/types/graphql';
import LanguageCard from '@/components/LanguageCard';

type Props = {
    repository: Repository
};

// Displays repository with information
const RepositoryCard = ({ repository }: Props) => {
    return (
        <div data-testid="repository-card">
            {/* Link that opens repository when clicked */}
            <a href={repository.url}>
                <span className="flex flex-col sm:flex-row justify-between w-full rounded-md text-slate-100 px-3 my-5">
                    {/* Repository Name and Description */}
                    <div className="flex-auto flex flex-col">
                        <span data-testid="repository-name" className="text-lg font-bold">{repository.name}</span>
                        <span data-testid="repository-description" >{repository.description ?? ""}</span>
                        <div className="h-3"></div>
                        <LanguageCard language={repository.primaryLanguage} />
                    </div>
                    {/* Star repository button */}
                    <div className="mt-4 sm:mt-0">
                        <button className="flex gap-2 bg-slate-100 text-slate-500 font-light px-3 py-1 rounded-md hover:bg-green-300 hover:text-slate-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>

                            <span>Star</span>
                        </button>
                    </div>

                </span>
            </a>
        </div>
    );
};

export default RepositoryCard;