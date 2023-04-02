import styled from "styled-components";

export const PostSummaryContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-weight: 700;
    font-size: 2.4rem;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
    align-self: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
  }
`