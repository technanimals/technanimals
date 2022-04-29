import styled from '@emotion/native';
// import type { ViewProps, ViewStyle } from 'react-native';
import type { ViewProps, ViewStyle } from 'react-native';
import {
  BackgroundColorProps,
  BordersProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
  borderColor,
  borderRadius,
  color,
  flexbox,
  layout,
  position,
  size,
  space,
  typography,
} from 'styled-system';

export type StyleSystemThemedProps = ViewStyle &
  BackgroundColorProps &
  BordersProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

export type ViewType = ViewProps & StyleSystemThemedProps;

export const Box = styled.View<ViewType>(
  color,
  border,
  borderColor,
  borderRadius,
  flexbox,
  layout,
  position,
  space,
  size,
  typography
);
