import { Link } from "react-router-dom";
import styled from "styled-components";

interface DefaultLinkContainerProps {
  reverse: boolean;
}

export const DefaultLinkContainer = styled(Link) <DefaultLinkContainerProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme["brand-blue"]};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: -20%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme["brand-blue"]};
    opacity: 0;
    transition: opacity .1s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`