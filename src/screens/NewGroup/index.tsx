import { Header } from "@/components/Header";
import { UsersThree } from "phosphor-react-native";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";

import { Container, Content } from "./styles";

export function NewGroup(){
  return(
    <Container>
      <Header showBackButton />

      <Content>
        <UsersThree 
          size={56}
          color="#00875F"
          style={{ alignSelf: 'center' }}
        />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma nova turma para adicionar novas pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}