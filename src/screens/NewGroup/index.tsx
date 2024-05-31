import { Header } from "@/components/Header";
import { UsersThree } from "phosphor-react-native";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";

import { Container, Content } from "./styles";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup(){
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleNew(){
    navigation.navigate('players', { group })
  }

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
        <Input 
          placeholder="Nome da turma" 
          onChangeText={setGroup}
        />
        <Button
          title="Criar" 
          style={{ marginTop: 20 }} 
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}