import styled from "styled-components";

export const SearchFieldContainer = styled.div`
  width: 100%;
  margin-top: 7.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme["base-subtitle"]};
      font-weight: 700;
      font-size: 1.8rem;
    }

    span {
      color: ${({ theme }) => theme["base-span"]};
      font-size: 1.4rem;
    }
  }
`

export const TextInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  color: ${({ theme }) => theme["base-text"]};
  background-color: ${({ theme }) => theme["base-input"]};
  border: 1px solid  ${({ theme }) => theme["base-border"]};
  border-radius: 6px;

  transition: border-color .2s;

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }

  &:focus {
    border-color: ${({ theme }) => theme["brand-blue"]};
    box-shadow: none;
  }
`