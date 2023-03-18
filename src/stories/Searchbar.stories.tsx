import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Searchbar from '@/components/Searchbar';

export default {
    title: 'Components/Searchbar',
    component: Searchbar,
    argTypes: {
        searchTerm: {
            description: 'Inital value for the text input. It has to be set on inital render and can not be changed afterwards.',
            control: {
                disabled: true,
                defaultValue: '',
            },
        },
        onSearchTermChange: {
            action: 'onSearchTermChange',
            description: 'Function that is called when the search term changes',
        },
    },
} as Meta;

const Template: React.FC = () => {
    function handleSearchTermChange(newSearchTerm: string) {
        action('onSearchTermChange')(newSearchTerm);
    }

    return (
        <Searchbar searchTerm={''} onSearchTermChange={handleSearchTermChange} />
    );
};

export const Default = Template.bind({});
