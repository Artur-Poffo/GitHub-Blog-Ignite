import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchFieldContainer, TextInput } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchFieldProps {
  PostsLength: number
  getPosts: (query: string) => Promise<void>
}

export function SearchField({ PostsLength, getPosts }: SearchFieldProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchFieldContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{PostsLength} publicações</span>
      </header>

      <TextInput type="text" placeholder="Buscar por conteúdo" {...register('query')} />
    </SearchFieldContainer>
  )
}