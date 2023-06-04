import React from 'react';
import { Container } from './style';

type IProps = {
  children?: React.ReactNode;
};

function Card({ children }: IProps) {
  return <Container>{children}</Container>;
}

export default Card;
