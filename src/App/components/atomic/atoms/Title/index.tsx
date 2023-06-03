import React from 'react';
import { H1 } from './styles';

type IProps = {
  children: React.ReactNode;
};

function Title({ children }: IProps) {
  return <H1>{children}</H1>;
}

export default Title;
