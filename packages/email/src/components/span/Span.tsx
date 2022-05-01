import styled from '@emotion/styled';
import { layout, LayoutProps, typography, TypographyProps } from 'styled-system';

// @ts-ignore
export const Span = styled.span<Props>(
  {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#000',
  },
  layout,
  typography,
  ({ lineHeight, fontSize }) => ({
    lineHeight: lineHeight || `${fontSize?.toString()}px`,
  })
);

interface Props extends LayoutProps, TypographyProps {}
