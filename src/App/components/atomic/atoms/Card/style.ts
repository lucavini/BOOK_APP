import styled from 'styled-components';

export const Container = styled('div')`
  width: fit-content;
  height: fit-content;
  min-width: 60px;
  min-height: 60px;

  background: ${({ theme }) => theme.plain.light};
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(204, 204, 204, 0.4);
`;
