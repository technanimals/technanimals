import { PropsWithChildren } from 'react';

export function Visible(props: VisibleProps) {
  if (!props.if) {
    return null;
  }

  return <>{props.children}</>;
}

export interface VisibleProps extends PropsWithChildren<{}> {
  if: boolean;
}
