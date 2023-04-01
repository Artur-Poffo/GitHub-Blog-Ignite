import { Link } from "react-router-dom";
import { IPost } from "../../../../interfaces/IPost";
import { formatDateDistance } from "../../../../utils/formatter";
import { CardContainer } from "./styles";

interface PostCardProps {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = formatDateDistance(post.created_at)

  return (
    <Link to={`/posts/${post.number}`} >
      <CardContainer>
        <header>
          <h3>{post.title}</h3>
          <span>{formattedDate}</span>
        </header>
        <p>{post.body}</p>
      </CardContainer>
    </Link>
  )
}