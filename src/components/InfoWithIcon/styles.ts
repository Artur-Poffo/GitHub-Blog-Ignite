import styled, { css } from "styled-components";

export type IconVariant = 'light' | 'dark'

interface InfoWithIconContainerProps {
  variant: IconVariant
}

export const InfoWithIconContainer = styled.div<InfoWithIconContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: ${({ theme }) => theme["base-label"]}
  }

  ${({ theme, variant }) => {
    if (variant === 'dark') {
      return css`
        span {
          color: ${() => theme["base-span"]}
        }
      `
    } else {
      return css`
        span {
          color: ${() => theme["base-subtitle"]}
        }
      `
    }
  }}
`