import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import RepositoryList from '@/components/RepositoryList';
import { Repository } from '@/types/graphql';

import mockRepositories from '@/tests/mockData/repositories';

type ComponentProps = {
    repositories: Repository[];
}

export default {
    title: 'Components/RepositoryList',
    component: RepositoryList,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#212121',
                },
            ],
        },
    },
    argTypes: {
        repositories: {
            description: 'The list of repositories to display',
            control: {
                type: 'array',
            },
        },
    },
} as Meta<ComponentProps>;

const Template: React.FC<ComponentProps> = (args) => <RepositoryList {...args} />;

export const Default = Template.bind({});
Default.args = {
    repositories: mockRepositories,
};
