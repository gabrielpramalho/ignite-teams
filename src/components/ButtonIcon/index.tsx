import { TouchableOpacityProps } from "react-native"
import { ButtonIconTypeStyleProps, Container } from "./styles"

import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from "styled-components/native"

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'PRIMARY', ...props}: ButtonIconProps) {

  const theme = useTheme()

  return (
    <Container {...props}>
      <MaterialIcons 
        size={24}
        color={type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED}
        name={icon}
      />
    </Container>
  )
}