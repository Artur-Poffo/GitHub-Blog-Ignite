import { IconVariant, InfoWithIconContainer } from "./styles"

interface InfoWithIconProps {
  icon: any
  text: string
  variant?: IconVariant
}

export function InfoWithIcon({ text, icon, variant = "light" }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer variant={variant}>
      {icon}
      <span>{text}</span>
    </InfoWithIconContainer>
  )
}