import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from "react"
import { DefaultLink } from "../../../../components/DefaultLink"
import { DefaultSummary } from "../../../../components/DefaultSummary"
import { InfoWithIcon } from "../../../../components/InfoWithIcon"
import { IUser } from "../../../../interfaces/IUser"
import { api } from "../../../../lib/axios"
import { AvatarImage, DescriptionWrapper, Footer, InfoWrapper, UserSummaryContainer } from "./styles"

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function UserSummary() {
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser)

  const getUserInfo = useCallback(async () => {
    const response = await api.get(`/users/${username}`);
    setUserInfo(response.data)
  }, [userInfo]);

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <DefaultSummary marginTop>
      <UserSummaryContainer>
        <AvatarImage url={userInfo.avatar_url} />

        <InfoWrapper>
          <DescriptionWrapper>
            <header>
              <h2>{userInfo.name}</h2>
              <DefaultLink link={userInfo.html_url} text="GitHub" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
            </header>

            <p>{userInfo.bio}</p>
          </DescriptionWrapper>

          <Footer>
            <InfoWithIcon text={userInfo.login} icon={<FontAwesomeIcon icon={faGithub} />} />

            {userInfo.company && <InfoWithIcon text={userInfo.company} icon={<FontAwesomeIcon icon={faBuilding} />} />}

            <InfoWithIcon text={`${userInfo.followers} seguidor(s)`} icon={<FontAwesomeIcon icon={faUserGroup} />} />
          </Footer>
        </InfoWrapper>
      </UserSummaryContainer>
    </DefaultSummary>
  )
}