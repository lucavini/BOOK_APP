import React from 'react';
import { SpanComponent, TextComponent } from './styles';

type IProps = {
  type?: 'p' | 'span';
  size?: 'small' | 'medium' | 'large';
  font?: 'regular' | 'thin' | 'bold' | 'semibold';
  children: React.ReactNode;
};

function Text({ children, size = 'medium', font='regular', type = 'p' }: IProps) {

  if (type === 'span') {
    return (
      <SpanComponent size="medium" font={font}>
        {children}
      </SpanComponent>
    );
  }

  return (
    <TextComponent size={size} font={font}>
      {children}
    </TextComponent>
  );
}

export default Text;
