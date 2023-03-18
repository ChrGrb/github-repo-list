import React from 'react';
import { MockedProvider, wait } from '@apollo/client/testing';
import { render, screen, } from '@testing-library/react';

import mockResponse from '@/tests/mockData/graphql';
import mockUser from '@/tests/mockData/user';
import App from '@/App';
import { act } from 'react-dom/test-utils';


describe('App', () => {
    it('renders user card and repository list', async () => {
        render(
            <MockedProvider mocks={mockResponse}
                addTypename={false}>
                <App />
            </MockedProvider>
        );

        // Wait for the query to resolve
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await wait(1000);
        });

        expect(screen.getByTestId('user-card')).toBeInTheDocument();
        expect(screen.getAllByTestId('repository-card')).toHaveLength(mockUser.repositories.nodes.length);
    });
});
