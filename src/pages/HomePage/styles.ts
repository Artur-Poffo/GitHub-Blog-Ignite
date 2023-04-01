import styled from "styled-components";

export const HomePageContainer = styled.section`
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostsGrid = styled.div`
  margin: 4.8rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  justify-items: center;
`