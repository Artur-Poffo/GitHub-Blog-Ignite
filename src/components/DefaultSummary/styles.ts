import styled from "styled-components";

interface DefaultSummaryContainerProps {
  marginTop: boolean
}

export const DefaultSummaryContainer = styled.div<DefaultSummaryContainerProps>`
  width: 100%;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;

  margin-top: ${({ marginTop }) => marginTop && 'calc(-9rem)'};
`