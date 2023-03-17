import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '@/components/userCard';
import mockUser from '@/tests/mockData/user';

describe('UserCard component', () => {
    test('renders user profile', () => {
        render(<UserCard user={mockUser} />);
        const avatarElement = screen.getByRole('img');
        const nameElement = screen.getByTestId('user-name');
        const loginElement = screen.getByTestId('user-login');
        const bioElement = screen.getByTestId('user-bio');
        expect(avatarElement).toHaveAttribute('src', mockUser.avatarUrl);
        expect(nameElement).toHaveTextContent(mockUser.name);
        expect(loginElement).toHaveTextContent(`@${mockUser.login}`);
        expect(bioElement).toHaveTextContent(mockUser.bio);
    });
    test('renders user profile without bio', () => {
        const mockUserWithoutBio = {
            ...mockUser,
            bio: null
        }
        render(<UserCard user={mockUserWithoutBio} />);
        const bioElement = screen.queryByText(mockUser.bio);
        expect(bioElement).not.toBeInTheDocument();
    });

    test('renders user profile without avatar', () => {
        const mockUserWithoutAvatar = {
            ...mockUser,
            avatarUrl: null
        }
        render(<UserCard user={mockUserWithoutAvatar} />);
        const avatarElement = screen.getByRole('img');
        expect(avatarElement).toHaveAttribute('src', '');
        expect(avatarElement).toHaveAttribute('alt', 'placeholder');
    });
});
