import React from 'react';

import LateralMenu from './LateralMenu';

import { Container, Section, Header, Content } from './styles';

type IProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

function Template({ children, title, subtitle }: IProps) {
  return (
    <>
      <LateralMenu />
      <Container>
        <Section>
          <Header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Header>

          <Content>{children}</Content>
        </Section>
      </Container>
    </>
  );
}

export default Template;
