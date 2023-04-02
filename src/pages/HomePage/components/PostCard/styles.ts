import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 41.6rem;
  height: 26rem;
  padding: 3.2rem;

  background-color: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  cursor: pointer;

  transition: border-color 0.2s;

  header {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      max-width: 28.3rem;
      color: ${({ theme }) => theme['base-title']};
      flex: 1;
      font-weight: 700;
      font-size: 2rem;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 1.4rem;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  @media (max-width: 465px) {
    width: 100%;
    padding: 1.4rem;

    header {
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`