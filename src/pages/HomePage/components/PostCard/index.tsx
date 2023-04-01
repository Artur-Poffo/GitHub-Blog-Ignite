import { Link } from "react-router-dom";
import { CardContainer } from "./styles";

export function PostCard() {
  return (
    <Link to={"/posts/2"} >
      <CardContainer>
        <header>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </header>
        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
      </CardContainer>
    </Link>
  )
}