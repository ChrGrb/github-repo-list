import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryCard from '@/components/repositoryCard';
import mockRepositories from '../mockData/repositories';

const mockRepository = mockRepositories[0];

describe('RepositoryCard component', () => {
    it('should render the repository name', () => {
        render(<RepositoryCard repository={mockRepository} />);
        const repositoryName = screen.getByTestId('repository-name');
        expect(repositoryName).toHaveTextContent(mockRepository.name);
    });

    it('should render the repository description if available', () => {
        render(<RepositoryCard repository={mockRepository} />);
        const repositoryDescription = screen.getByTestId('repository-description');
        expect(repositoryDescription).toHaveTextContent(mockRepository.description);
    });

    it('should not render the repository description if not available', () => {
        const repositoryWithoutDescription = {
            ...mockRepository,
            description: null,
        };
        render(<RepositoryCard repository={repositoryWithoutDescription} />);
        const repositoryDescription = screen.queryByText(mockRepository.description);
        expect(repositoryDescription).not.toBeInTheDocument();
    });

    it('should render the primary language', () => {
        render(<RepositoryCard repository={mockRepository} />);
        const primaryLanguage = screen.getByText(mockRepository.primaryLanguage.name);
        expect(primaryLanguage).toBeInTheDocument();
    });

    it('should render the star button', () => {
        render(<RepositoryCard repository={mockRepository} />);
        const starButton = screen.getByRole('button', { name: 'Star' });
        expect(starButton).toBeInTheDocument();
    });
});
