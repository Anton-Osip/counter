import type {Meta, StoryObj} from '@storybook/react';

import {Settings} from './Settings';
import React from "react";

const meta: Meta<typeof Settings> = {
    component: Settings,
};

export default meta;
type SettingsType = StoryObj<typeof Settings>;

export const StoreCounter: SettingsType = {
    args: {},
}


