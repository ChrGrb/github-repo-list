import React from 'react';
import { Language } from '@/types/graphql';

type Props = {
    language: Language
};

// Displays language with colored dot
const LanguageCard = ({ language }: Props) => {
    return (
        <div data-testid="language-card">
            <div className="flex justify-start gap-3">
                {/* Language Card*/}
                <div className="flex gap-2 rounded-full bg-slate-100 text-slate-500 px-2 py-1">
                    {/* Dot in color of language */}
                    <svg width="8" height="8" className="my-auto rounded-full">
                        <circle data-testid="language-color-circle" cx="4" cy="4" r="8" fill={language.color ?? "bg-cyan-700"} />
                    </svg>
                    {/* Language Name */}
                    <span className="text-xs">{language.name}</span>
                </div>
            </div>
        </div>
    );
}

export default LanguageCard;