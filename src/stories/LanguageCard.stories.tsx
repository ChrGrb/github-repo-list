import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import LanguageCard from '@/components/LanguageCard';

import mockLanguage from '@/tests/mockData/language';
import { Language } from '@/types/graphql';

export default {
    title: 'Components/LanguageCard',
    component: LanguageCard,
    argTypes: {
        name: {
            description: 'Name of the language',
        },
        color: {
            description: 'Color of the dot to the left of the language name',
        },
    }
} as Meta<Language>;

const Template: React.FC<Language> = (args) => <LanguageCard language={args} />;

export const Default = Template.bind({});
Default.args = {
    ...mockLanguage
};
