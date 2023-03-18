import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import UserCard from '@/components/UserCard';

import mockUser from '@/tests/mockData/user';
import { User } from '@/types/graphql';

export default {
    title: 'Components/UserCard',
    component: UserCard,
    argTypes: {
        avatarUrl: {
            description: 'URL to the user avatar image',
        },
        bio: {
            description: 'Users bio',
        },
        login: {
            description: 'Users login',
        },
        name: {
            description: 'Users name',
        },
    },
} as Meta<User>;

const Template: React.FC<User> = (args) => {
    return (
        <div className="max-w-md mx-auto">
            <UserCard user={args} />
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    ...mockUser
};

