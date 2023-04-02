import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../interfaces/IPost";
import { api } from "../../lib/axios";
import { PostContent } from "./components/PostContent";
import { PostSummary } from "./components/PostSummary";
import { PostPageContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function PostPage() {
  const [postContent, setPostContent] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const loadPostContent = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)
      setPostContent(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postContent])

  useEffect(() => {
    loadPostContent()
  }, [])

  return (
    <PostPageContainer>
      <PostSummary post={postContent} isLoading={isLoading} />
      {!isLoading && <PostContent content={postContent.body} />}
    </PostPageContainer>
  )
}