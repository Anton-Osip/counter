import type {Meta, StoryObj} from '@storybook/react';

import {Form} from './Form';
import React from "react";

const meta: Meta<typeof Form> = {
    component: Form,
};

export default meta;
type FormType = StoryObj<typeof Form>;

export const StoreCounter: FormType = {
    args: {},
}


