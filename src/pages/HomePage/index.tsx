import { PostCard } from "./components/PostCard";
import { SearchField } from "./components/SearchField";
import { UserSummary } from "./components/UserSummary";
import { HomePageContainer, PostsGrid } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <UserSummary />
      <SearchField />

      <PostsGrid>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsGrid>
    </HomePageContainer>
  )
}