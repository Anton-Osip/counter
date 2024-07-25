import type {Meta, StoryObj} from '@storybook/react';

import {Counter} from './Counter';
import React from "react";

const meta: Meta<typeof Counter> = {
    component: Counter,
};

export default meta;
type CounterType = StoryObj<typeof Counter>;

export const StoreCounter: CounterType = {
    args: {},
}


