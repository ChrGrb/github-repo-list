import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Searchbar from '@/components/Searchbar';

describe('Searchbar component', () => {
    it('calls the onSearchTermChange function with the new search term', () => {
        const onSearchTermChange = jest.fn();
        render(<Searchbar searchTerm="" onSearchTermChange={onSearchTermChange} />);
        const searchInput = screen.getByPlaceholderText('Start searching...');
        fireEvent.change(searchInput, { target: { value: 'new search term' } });
        expect(onSearchTermChange).toHaveBeenCalledWith('new search term');
    });

    it('renders the search term in the input element', () => {
        const searchTerm = 'initial search term';
        render(<Searchbar searchTerm={searchTerm} onSearchTermChange={jest.fn()} />);
        const searchInput = screen.getByPlaceholderText('Start searching...');
        expect(searchInput).toHaveValue(searchTerm);
    });
});