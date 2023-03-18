import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Repository } from '@/types/graphql';

import RepositoryCard from '@/components/RepositoryCard';

import mockRepositories from '@/tests/mockData/repositories';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Components/RepositoryCard',
    component: RepositoryCard,
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
        description: {
            description: 'Description of the repository',
        },
        id: {
            description: 'ID of the repository',
        },
        name: {
            description: 'Name of the repository',
        },
        primaryLanguage: {
            description: 'Primary programming language used in the repository',
        },
        url: {
            description: 'URL to the repository',
        },
        onStar: {
            action: 'onStar',
            description: 'Function that is called when the users stars the repository',
        }
    },
} as Meta<Repository>;

const Template: React.FC<Repository> = (args) => (
    <RepositoryCard repository={args} onStar={(repository: Repository) => action('onStar')(repository.name + "starred")} />
);

export const Default = Template.bind({});
Default.args = {
    ...mockRepositories[0]
};
