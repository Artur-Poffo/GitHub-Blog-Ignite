import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDays, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultLink } from "../../../../components/DefaultLink";
import { DefaultSummary } from "../../../../components/DefaultSummary";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { IPost } from "../../../../interfaces/IPost";
import { formatDateDistance } from "../../../../utils/formatter";
import { IconsWrapper, PostInfoWrapper, PostSummaryContainer } from "./styles";

interface PostSummaryProps {
  post: IPost
  isLoading: boolean
}

export function PostSummary({ post, isLoading }: PostSummaryProps) {
  const formattedDate = formatDateDistance(!isLoading && post.created_at)

  return (
    <DefaultSummary marginTop>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <PostSummaryContainer>
          <header>
            <DefaultLink link="/" text="Voltar" reverse icon={<FontAwesomeIcon icon={faChevronLeft} />} />
            <DefaultLink link={post.html_url} text="Ver no GitHub" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
          </header>
          <PostInfoWrapper>
            <h1>{post.title}</h1>
            <IconsWrapper>
              <InfoWithIcon text={post.user?.login} variant="dark" icon={<FontAwesomeIcon icon={faGithub} />} />
              <InfoWithIcon text={formattedDate} variant="dark" icon={<FontAwesomeIcon icon={faCalendarDays} />} />
              <InfoWithIcon text={`${post.comments} comentários`} variant="dark" icon={<FontAwesomeIcon icon={faComment} />} />
            </IconsWrapper>
          </PostInfoWrapper>
        </PostSummaryContainer>
      )}
    </DefaultSummary>
  )
}