import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (_args) => {
  return <Box backgroundColor="blue" flex={1} display="flex" />;
};

export const Interactive = Template.bind({});
Interactive.args = {};
