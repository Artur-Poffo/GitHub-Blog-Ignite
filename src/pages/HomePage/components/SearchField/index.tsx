import { SearchFieldContainer, TextInput } from "./styles";

export function SearchField() {
  return (
    <SearchFieldContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <TextInput type="text" placeholder="Buscar por conteúdo" />
    </SearchFieldContainer>
  )
}