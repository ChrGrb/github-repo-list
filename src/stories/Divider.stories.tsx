import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Divider from '@/components/Divider';

export default {
    title: 'Components/Divider',
    component: Divider,
    argTypes: {},
} as Meta;

const Template: React.FC = (args) => {
    return (
        <div className="bg-slate-200 h-20 w-full flex flex-col justify-center">
            <Divider {...args} />
        </div>
    )
}

export const Default = Template.bind({});
