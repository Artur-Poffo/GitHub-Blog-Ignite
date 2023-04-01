import { ReactNode } from "react"
import { DefaultSummaryContainer } from "./styles"

interface DefaultSummaryProps {
  children: ReactNode
  marginTop?: boolean
}

export function DefaultSummary({ children, marginTop = false }: DefaultSummaryProps) {
  return (
    <DefaultSummaryContainer marginTop={marginTop}>
      {children}
    </DefaultSummaryContainer>
  )
}