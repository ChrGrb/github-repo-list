import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageCard from '@/components/LanguageCard';
import { Language } from '@/types/graphql';
import mockLanguage from '@/tests/mockData/language';


describe('LanguageCard component', () => {
    test('renders language name', () => {
        render(<LanguageCard language={mockLanguage} />);
        const languageNameElement = screen.getByTestId('language-card');
        expect(languageNameElement).toBeInTheDocument();
    });

    test('renders default color when color not provided', () => {
        const mockLanguageWithoutColor: Language = {
            ...mockLanguage,
            color: null
        };
        render(<LanguageCard language={mockLanguageWithoutColor} />);
        const languageCardElement = screen.getByTestId('language-color-circle');
        expect(languageCardElement).toHaveStyle({ backgroundColor: 'bg-cyan-700' });
    });

    test('renders language color', () => {
        render(<LanguageCard language={mockLanguage} />);
        const languageCardElement = screen.getByTestId('language-color-circle');
        expect(languageCardElement).toHaveAttribute('fill', mockLanguage.color);
    });
});
