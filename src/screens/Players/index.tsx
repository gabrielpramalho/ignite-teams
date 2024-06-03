import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";


import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('TIME A')
  const [players, setPlayers] = useState([])

  const route = useRoute()

  const { group } = route.params as RouteParams

  

  return(
    <Container>
      <Header showBackButton />

      <Highlight title={ group } subtitle="Adicione a Galera e separe os times" />
      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add"/>
      </Form>

      <HeaderList>
        <FlatList 
          data={['TIME A', 'TIME B']}
          scrollEnabled={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message="Não há ninguém nesse time ainda" />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover turma" 
        type="SECONDARY"
      />

    </Container>
  )
}