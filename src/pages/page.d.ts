import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type CustomNextPage<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
