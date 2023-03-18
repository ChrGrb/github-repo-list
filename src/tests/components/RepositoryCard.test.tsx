import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryCard from '@/components/RepositoryCard';
import mockRepositories from '../mockData/repositories';
import { Repository } from '@/types/graphql';

const mockRepository = mockRepositories[0];

describe('RepositoryCard component', () => {
    it('should render the repository name', () => {
        render(<RepositoryCard repository={mockRepository} onStar={(repository: Repository) => void 0} />);
        const repositoryName = screen.getByTestId('repository-name');
        expect(repositoryName).toHaveTextContent(mockRepository.name);
    });

    it('should render the repository description if available', () => {
        render(<RepositoryCard repository={mockRepository} onStar={(repository: Repository) => void 0} />);
        const repositoryDescription = screen.getByTestId('repository-description');
        expect(repositoryDescription).toHaveTextContent(mockRepository.description);
    });

    it('should not render the repository description if not available', () => {
        const repositoryWithoutDescription = {
            ...mockRepository,
            description: null,
        };
        render(<RepositoryCard repository={repositoryWithoutDescription} onStar={(repository: Repository) => void 0} />);
        const repositoryDescription = screen.queryByText(mockRepository.description);
        expect(repositoryDescription).not.toBeInTheDocument();
    });

    it('should render the primary language', () => {
        render(<RepositoryCard repository={mockRepository} onStar={(repository: Repository) => void 0} />);
        const primaryLanguage = screen.getByText(mockRepository.primaryLanguage.name);
        expect(primaryLanguage).toBeInTheDocument();
    });

    it('should render the star button', () => {
        render(<RepositoryCard repository={mockRepository} onStar={(repository: Repository) => void 0} />);
        const starButton = screen.getByRole('button', { name: 'Star' });
        expect(starButton).toBeInTheDocument();
    });
});
