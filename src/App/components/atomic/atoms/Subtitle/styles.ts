import styled from 'styled-components';

export const H2 = styled('h2')`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.gray.main};
`;
