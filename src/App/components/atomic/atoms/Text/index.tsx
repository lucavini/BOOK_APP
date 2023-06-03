import React from 'react';
import { TextComponent } from './styles';

type IProps = {
  font?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

function Text({ children, font = 'medium' }: IProps) {
  return <TextComponent font={font}>{children}</TextComponent>;
}

export default Text;
