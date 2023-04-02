import styled from "styled-components";

export const UserSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`

interface AvatarImageProps {
  url: string;
}

export const AvatarImage = styled.div<AvatarImageProps>`
  min-width: 14.8rem;
  height: 14.8rem;
  
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  @media (max-width: 660px) {
    width: 14.8rem;
    margin: 0 auto;
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme["base-title"]};
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 370px) {
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 1rem;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: ${({ theme }) => theme["base-label"]};
  }

  span {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.6rem;
  }
`