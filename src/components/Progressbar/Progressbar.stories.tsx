import type {Meta, StoryObj} from '@storybook/react';

import {Progressbar} from './Progressbar';
import React from "react";

const meta: Meta<typeof Progressbar> = {
    component: Progressbar,
};

export default meta;
type ProgressbarType = StoryObj<typeof Progressbar>;

export const StoreProgressbar: ProgressbarType = {
    args: {fill: 45},
}


