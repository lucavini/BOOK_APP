import React from 'react';
import { Buttom } from './styles';

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'tertiary' | 'smallPrimary' | 'smallSecondary';
  danger?: boolean;
}

function ButtomComponent(props: Iprops) {
  return <Buttom {...props}>{props.children}</Buttom>;
}

export default ButtomComponent;
