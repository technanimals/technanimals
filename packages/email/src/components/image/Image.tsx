import styled from '@emotion/styled';

export const Image = styled.img<ImageProps>({
  display: 'block',
  outline: 'none',
  border: 'none',
  textDecoration: 'none',
});

export interface ImageProps {
  alt: string;
  src: string;
  width: number;
  height: number;
}
