import { UsersThree } from "phosphor-react-native"
import { TouchableOpacityProps } from "react-native"

import { Container, Title } from "./styles"

type GroupCardProps = TouchableOpacityProps & {
  titleText: string
}

export function GroupCard({titleText, ...props}: GroupCardProps) {
  return (
    <Container {...props}>
      <UsersThree 
        weight="fill" 
        size={32} 
        color="#00875F" 
      />
      <Title>
        {titleText}
      </Title>
    </Container>
  )
}