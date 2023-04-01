import { useCallback, useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { SearchField } from "./components/SearchField";
import { UserSummary } from "./components/UserSummary";
import { HomePageContainer, PostsGrid } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function HomePage() {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback(async (query: string = "") => {
    const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);

    setPosts(response.data.items);
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <HomePageContainer>
      <UserSummary />
      <SearchField PostsLength={posts.length} getPosts={getPosts} />

      <PostsGrid>
        {posts.map(post => {
          return (
            <PostCard key={post.number} post={post} />
          )
        })}
      </PostsGrid>
    </HomePageContainer>
  )
}