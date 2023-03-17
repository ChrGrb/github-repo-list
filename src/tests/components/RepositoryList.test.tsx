import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RepositoryList from '@/components/RepositoryList';
import mockRepositories from '@/tests/mockData/repositories';


describe('RepositoryList component', () => {
    it('filters repositories by name when search term changes', () => {
        render(<RepositoryList repositories={mockRepositories} />);
        const searchInput = screen.getByRole('textbox');
        fireEvent.change(searchInput, { target: { value: mockRepositories[0].name } });
        const repositoryCards = screen.getAllByTestId('repository-card');
        expect(repositoryCards.length).toBe(1);
        expect(repositoryCards[0]).toHaveTextContent(mockRepositories[0].name);
    });

    it('renders all repositories when search term is empty', () => {
        render(<RepositoryList repositories={mockRepositories} />);
        const repositoryCards = screen.getAllByTestId('repository-card');
        expect(repositoryCards.length).toBe(mockRepositories.length);
    });

    it('renders no repositories for empty array', () => {
        render(<RepositoryList repositories={[]} />);
        const repositoryCards = screen.queryAllByTestId('repository-card');
        expect(repositoryCards.length).toBe(0);
    });

    it('renders a divider between repositories', () => {
        render(<RepositoryList repositories={mockRepositories} />);
        const dividers = screen.getAllByTestId('divider');
        expect(dividers.length).toBe(mockRepositories.length - 1);
    });

    it('renders searchbar', () => {
        render(<RepositoryList repositories={mockRepositories} />);
        const searchbar = screen.getByTestId('searchbar');
        expect(searchbar).toBeInTheDocument();
    });
});
