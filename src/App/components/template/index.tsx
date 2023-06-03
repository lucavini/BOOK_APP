import React from 'react';

import Title from '@Atoms/Title';
import SubTitle from '@Atoms/Subtitle';
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
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </Header>

          <Content>{children}</Content>
        </Section>
      </Container>
    </>
  );
}

export default Template;
