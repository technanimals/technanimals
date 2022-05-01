import styled from '@emotion/styled';
import React from 'react';
import {
  color,
  fontFamily,
  fontSize,
  space,
  ColorProps,
  SpaceProps,
  FontSizeProps,
  FontFamilyProps,
} from 'styled-system';

const BaseLink = styled.a<LinkProps>({}, color, space, fontFamily, fontSize);

export function Link(props: Props) {
  return (
    <BaseLink {...props} target="_blank">
      {props.children}
    </BaseLink>
  );
}

interface LinkProps extends ColorProps, SpaceProps, FontSizeProps, FontFamilyProps {}
type BaseLinkParams = Parameters<typeof BaseLink>;
type Props = BaseLinkParams[0];
