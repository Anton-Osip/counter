import type {Meta, StoryObj} from '@storybook/react';

import {Display} from './Display';
import React from "react";

const meta: Meta<typeof Display> = {
    component: Display,
};

export default meta;
type CounterType = StoryObj<typeof Display>;

export const StoreCounter: CounterType = {
    args: {},
}


