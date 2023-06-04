import React from 'react';
import { SpanComponent, TextComponent, ItextProps } from './styles';

type IProps = ItextProps & {
  type?: 'p' | 'span';
  children: React.ReactNode;
};

function Text({ children, size = 'medium', font='regular', type = 'p' }: IProps) {

  if (type === 'span') {
    return (
      <SpanComponent size={size} font={font}>
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
