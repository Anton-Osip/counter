import type {Meta, StoryObj} from '@storybook/react';
//
import {Button} from './Button';
import React from "react";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type ButtonType = StoryObj<typeof Button>;

export const Primary: ButtonType = {
    args: {
        children: 'Primary button',
    },
}

export const DisabledButton: ButtonType = {
    args: {
        disabled: true,
        children: 'Primary button',
    },
}
