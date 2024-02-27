import {
  ComponentProps,
  JSX,
  JSXElementConstructor,
  Dispatch,
  SetStateAction,
} from 'react';

export type Stater<Type> = Dispatch<SetStateAction<Type>>;

export type Maybe<T> = NonNullable<T> | undefined;
export type Props<
  Type extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  Type2,
> = ComponentProps<Type> & Type2;
