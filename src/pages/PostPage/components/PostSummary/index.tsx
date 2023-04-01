import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDays, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultLink } from "../../../../components/DefaultLink";
import { DefaultSummary } from "../../../../components/DefaultSummary";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { IconsWrapper, PostInfoWrapper, PostSummaryContainer } from "./styles";

export function PostSummary() {
  return (
    <DefaultSummary marginTop>
      <PostSummaryContainer>
        <header>
          <DefaultLink link="/" text="Voltar" reverse icon={<FontAwesomeIcon icon={faChevronLeft} />} />
          <DefaultLink link="/" text="Ver no GitHub" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
        </header>
        <PostInfoWrapper>
          <h1>JavaScript data types and data structures</h1>
          <IconsWrapper>
            <InfoWithIcon text="Artur-Poffo" variant="dark" icon={<FontAwesomeIcon icon={faGithub} />} />
            <InfoWithIcon text="há 1 dia" variant="dark" icon={<FontAwesomeIcon icon={faCalendarDays} />} />
            <InfoWithIcon text="5 comentários" variant="dark" icon={<FontAwesomeIcon icon={faComment} />} />
          </IconsWrapper>
        </PostInfoWrapper>
      </PostSummaryContainer>
    </DefaultSummary>
  )
}