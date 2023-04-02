import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  max-width: 100vw;
  
  img {
    width: 100%;
    max-height: 29.6rem;
    object-fit: cover;

    @media (max-width: 870px) {
      height: 30vh;
    }
  }
`