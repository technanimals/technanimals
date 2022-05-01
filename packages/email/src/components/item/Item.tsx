import styled from '@emotion/styled';
import React from 'react';
import { ColorProps, FontFamilyProps, FontSizeProps, SpaceProps } from 'styled-system';

const BaseItem = styled.td<Props>({});

export function Item(props: ItemProps) {
  return (
    <tr>
      <BaseItem {...props}>{props.children}</BaseItem>
    </tr>
  );
}

interface Props extends ColorProps, SpaceProps, FontSizeProps, FontFamilyProps {}
type BaseLinkParams = Parameters<typeof BaseItem>;
export type ItemProps = BaseLinkParams[0];
