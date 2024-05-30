import { Container, LoadIndicator } from "./style";
import { ActivityIndicator } from "react-native";

export function Loading() {
  return(
    <Container>
      <LoadIndicator />
    </Container>
  )
}