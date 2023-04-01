import { DefaultLinkContainer } from "./styles"

interface DefaultLinkProps {
  icon?: any
  text: string
  link: string
  reverse?: boolean
}

export function DefaultLink({ text, icon, link, reverse = false }: DefaultLinkProps) {
  return (
    <DefaultLinkContainer reverse={reverse} to={link}>
      {text}
      {icon}
    </DefaultLinkContainer>
  )
}