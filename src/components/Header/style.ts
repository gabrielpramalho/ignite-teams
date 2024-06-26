import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View<{ $hasBackButton: boolean }>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.$hasBackButton ? 'space-between' : 'center'};
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackButton = styled.TouchableOpacity`
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``