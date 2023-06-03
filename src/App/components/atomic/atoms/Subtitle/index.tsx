import React from 'react';
import { H2 } from './styles';

type IProps = {
  children: React.ReactNode;
};

function Title({ children }: IProps) {
  return <H2>{children}</H2>;
}

export default Title;
