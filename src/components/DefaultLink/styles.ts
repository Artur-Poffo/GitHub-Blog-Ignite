import { Link } from "react-router-dom";
import styled from "styled-components";

interface DefaultLinkContainerProps {
  reverse: boolean;
}

export const DefaultLinkContainer = styled(Link) <DefaultLinkContainerProps>`
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme["brand-blue"]};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
`