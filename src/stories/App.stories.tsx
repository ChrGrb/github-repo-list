import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { MockedProvider } from '@apollo/client/testing';

import App from '@/App';

import mockResponse from '@/tests/mockData/graphql';

export default {
    title: 'Pages/Repositories',
    component: App,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} as Meta;

const Template: React.FC = () => {
    return (
        <MockedProvider mocks={mockResponse}>
            <App />
        </MockedProvider>
    )
}

export const Default = Template.bind({});
