import styled from "styled-components"

export const UserSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
`

export const AvatarImage = styled.div`
  min-width: 14.8rem;
  height: 14.8rem;
  
  background-image: url("https://s3-alpha-sig.figma.com/img/c460/226f/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0?Expires=1681084800&Signature=PWw~OlTxXz8MFNViq8ekBYZFPUsw~XSivcVOsqxsbSksfjarz8syflr46ULvws9F5VQypNp4MrXPrOSZk1DoLMf2SUHgg32XaBxKv-BCu1ijVDQDgi~Zu9cU5hDOv0Wf1CY0V3TWiLYecqqBW~g1fV5dSxSWcYvBkzfWwP5zFAxoYp~9epT2zTYHrsJRf4rig0hPYZEP1eu8B1Xk-Yzfql2GnpQPiJX4vYCKZenf8LfHnzMTuNQTMfixR6v6KRt3lJPftXqzJrjHv1i8M53h2ZKw9KhiFF1okAIdrJnlVMjtME2zANDcSATLeAr9ccVD9suLX1pLU0BqSa~AxZb9wQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`

export const InfoWrapper = styled.div`
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