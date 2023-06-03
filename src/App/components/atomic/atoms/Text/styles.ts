import styled, { css } from 'styled-components';

type ItextProps = {
  font: 'small' | 'medium' | 'large';
};

const textFontVariants = {
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 16px;
  `,
  large: css`
    font-size: 18px;
  `,
};

export const TextComponent = styled('p')<ItextProps>`
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.gray.dark};
  ${({ font }) => textFontVariants[font] || textFontVariants.medium}
  ${({ font }) => textFontVariants[font] || textFontVariants.medium}
`;
