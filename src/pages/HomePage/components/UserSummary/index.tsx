import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DefaultLink } from "../../../../components/DefaultLink"
import { DefaultSummary } from "../../../../components/DefaultSummary"
import { InfoWithIcon } from "../../../../components/InfoWithIcon"
import { AvatarImage, DescriptionWrapper, Footer, InfoWrapper, UserSummaryContainer } from "./styles"

export function UserSummary() {
  return (
    <DefaultSummary marginTop>
      <UserSummaryContainer>
        <AvatarImage />

        <InfoWrapper>
          <DescriptionWrapper>
            <header>
              <h2>Artur Poffo</h2>
              <DefaultLink link="https://github.com/Artur-Poffo" text="GitHub" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed vitae similique ad rem aliquid, ipsa iure dignissimos amet ullam doloremque neque, velit repudiandae asperiores illum inventore laudantium voluptatum qui?</p>
          </DescriptionWrapper>

          <Footer>
            <InfoWithIcon text="Artur-Poffo" icon={<FontAwesomeIcon icon={faGithub} />} />

            <InfoWithIcon text="@Rocketseat" icon={<FontAwesomeIcon icon={faBuilding} />} />

            <InfoWithIcon text="32 seguidores" icon={<FontAwesomeIcon icon={faUserGroup} />} />
          </Footer>
        </InfoWrapper>
      </UserSummaryContainer>
    </DefaultSummary>
  )
}