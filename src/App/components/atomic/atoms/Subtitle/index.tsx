import React from 'react';
import { H2 } from './styles';

type IProps = {
  children: React.ReactNode;
};

function Subtitle({ children }: IProps) {
  return <H2>{children}</H2>;
}

export default Subtitle;
