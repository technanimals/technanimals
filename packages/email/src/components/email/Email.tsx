import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

import { Box, BoxProps } from '../box';
import { Item, ItemProps } from '../item';

const BaseEmail = styled.body({
  width: '100%',
  margin: 0,
  padding: 0,
  WebkitTextSizeAdjust: '100%',
  MsTextSizeAdjust: '100%',
});

export function Email(props: EmailProps) {
  const { title, lang, bgColor, align, valign, width, bodyStyle } = props;
  return (
    // @ts-ignore
    <html lang={lang} xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {/* {props.headCSS && <style type="text/css">{props.headCSS}</style>} */}
      </head>
      <BaseEmail>
        <Box width="100%" height="100%" bg={bgColor}>
          <Item align={align} valign={valign}>
            <Box width={width} textAlign="center" {...bodyStyle}>
              {props.children}
            </Box>
          </Item>
        </Box>
      </BaseEmail>
    </html>
  );
}

export type EmailProps = PropsWithChildren<{
  lang?: string;
  title: string;
  align?: ItemProps['align'];
  valign?: ItemProps['valign'];
  width?: string;
  bgColor?: string;
  bodyStyle?: BoxProps;
}>;
