import React from 'react';
import { Container } from './styles';
import LateralMenu from './LateralMenu';

type IProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

function Template({ children, title, subtitle }: IProps) {
  return (
    <Container>
      <LateralMenu />

      <section>
        <header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>

        {children}
      </section>
    </Container>
  );
}

export default Template;
