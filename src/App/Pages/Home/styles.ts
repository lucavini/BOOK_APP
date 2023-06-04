import styled from 'styled-components';

export const BookDetailContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const Info = styled('div')`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;

export const Footer = styled('div')`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
