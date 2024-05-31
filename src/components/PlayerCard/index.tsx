import { useTheme } from "styled-components/native";
import { Container, Name } from "./styles";

import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIcon } from "../ButtonIcon";

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps){

  const theme = useTheme()

  return(
    <Container>
      <MaterialIcons 
        size={24}
        color={theme.COLORS.GRAY_200}
        name="person"
      />
      <Name>
        {name}
      </Name>

      <ButtonIcon 
        icon="close" 
        type="SECONDARY" 
        onPress={onRemove}
      />
    </Container>
  )
}