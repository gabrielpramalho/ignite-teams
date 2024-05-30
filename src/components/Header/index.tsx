
import { BackButton, BackIcon, Container, Logo } from "./style";
import logoImg from "@/assets/logo.png"

export interface HeaderProps {
  showBackButton?: boolean
}

export function Header({showBackButton = false}: HeaderProps) {
  return (
    <Container $hasBackButton={showBackButton}>
      {showBackButton && 
      <BackButton>
        <BackIcon />
      </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}