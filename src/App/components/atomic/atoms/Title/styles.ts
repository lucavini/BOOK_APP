import styled from 'styled-components';

export const H1 = styled('h1')`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: ${({ theme }) => theme.gray.dark};
`;
