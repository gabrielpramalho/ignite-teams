
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./style";
import logoImg from "@/assets/logo.png"

export interface HeaderProps {
  showBackButton?: boolean
}

export function Header({showBackButton = false}: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container $hasBackButton={showBackButton}>
      {showBackButton && 
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}