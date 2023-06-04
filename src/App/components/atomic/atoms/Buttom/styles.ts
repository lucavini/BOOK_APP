import styled, { css } from 'styled-components';

type IButtomProps = {
  danger?: boolean;
  variation?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'smallPrimary'
    | 'smallSecondary';
};

const DangerVariations = {
  primary: css`
    background: ${({ theme }) => theme.danger};
    border: 2px solid ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
    }

    &:active {
      background: ${({ theme }) => theme.danger};
    }
  `,

  secondary: css`
    border: 2px solid ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
      color: ${({ theme }) => theme.plain.light};
    }
  `,

  tertiary: css`
    background: none;
    width: auto;
    color: ${({ theme }) => theme.danger};
  `,

  smallPrimary: css`
    background: ${({ theme }) => theme.danger};
    border: 2px solid ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
    }

    &:active {
      background: ${({ theme }) => theme.danger};
    }
  `,

  smallSecondary: css`
    border: 2px solid ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme.danger};

    &:hover {
      background: ${({ theme }) => theme.danger};
      color: ${({ theme }) => theme.plain.light};
    }
  `,
};

const PrimaryVariations = {
  primary: css`
    background: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  secondary: css`
    border: 2px solid ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: ${({ theme }) => theme.plain.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  tertiary: css`
    background: none;
    width: auto;
    color: ${({ theme }) => theme.primary.main};
  `,

  smallPrimary: css`
    width: 101px;
    background: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,

  smallSecondary: css`
    width: 101px;
    border: 2px solid ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.main};

    &:hover {
      background: ${({ theme }) => theme.primary.main};
      color: ${({ theme }) => theme.plain.light};
    }

    &:active {
      background: ${({ theme }) => theme.primary.dark};
    }
  `,
};

export const Buttom = styled('button')<IButtomProps>`
  width: 100%;
  max-width: 330px;
  height: 44px;
  padding: 14px 28px;
  border-radius: 44px;

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s ease-in;

  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.plain.light};
  ${({ variation }) => PrimaryVariations[variation ?? 'primary']}

  ${({ danger, variation }) => {
    if (danger && (variation === 'primary' || variation === undefined)) {
      return DangerVariations['primary'];
    }
    if (danger && variation === 'secondary') {
      return DangerVariations['secondary'];
    }
    if (danger && variation === 'tertiary') {
      return DangerVariations['tertiary'];
    }
    if (danger && variation === 'smallPrimary') {
      return DangerVariations['smallPrimary'];
    }
    if (danger && variation === 'smallSecondary') {
      return DangerVariations['smallSecondary'];
    }
  }}

  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }
`;
