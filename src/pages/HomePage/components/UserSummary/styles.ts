import styled from "styled-components";

export const UserSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
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

    a, a:active {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme["brand-blue"]};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.2rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2.4rem;
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