import styled from '@emotion/styled';
import React from 'react';
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  backgroundColor,
  BackgroundColorProps,
  layout,
  LayoutProps,
  TypographyProps,
  typography,
} from 'styled-system';

const BaseBox = styled.table<Props>({}, color, space, backgroundColor, typography, layout);

export function Box(props: BoxProps) {
  return (
    <BaseBox {...props}>
      <tbody>{props.children}</tbody>
    </BaseBox>
  );
}

interface Props
  extends ColorProps,
    SpaceProps,
    BackgroundColorProps,
    TypographyProps,
    LayoutProps {}
type BaseContainerParams = Parameters<typeof BaseBox>;
export type BoxProps = BaseContainerParams[0];
