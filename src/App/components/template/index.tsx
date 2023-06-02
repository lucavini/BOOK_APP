import React from 'react';

import LateralMenu from './LateralMenu';

import { Container } from './styles';

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
