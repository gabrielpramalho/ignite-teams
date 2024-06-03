import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";


import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@/utils/AppError";
import { playerAddByGroup } from "@/storage/player/playerAddByGroup";
import { playersGetByGroup } from "@/storage/player/playersGetByGroups";
import { playersGetByGroupAndTeam } from "@/storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@/storage/player/playerRemoveByGroup";

type RouteParams = {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('TIME A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()

  const { group } = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)


  async function handleAddPlayer() {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome de uma pessoa.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      
      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')

      await fetchPlayerByTeam()
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      }else {
        console.log()
        Alert.alert('Nova pessoa', 'Ops, houve um erro ao adicionar.')
      }
    }
  }
  
  async function fetchPlayerByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Pessoas', 'Ops, ocorreu algum erro.')
    }
  }

  async function handlePlayerRemove(name: string){
    try {

      await playerRemoveByGroup(name, group)
      fetchPlayerByTeam()

    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Opss!')
    }
  }

  useEffect(() => {
    fetchPlayerByTeam()
  }, [team])

  return(
    <Container>
      <Header showBackButton />

      <Highlight title={ group } subtitle="Adicione a Galera e separe os times" />
      <Form>
        <Input 
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon 
          onPress={handleAddPlayer}
          icon="add"
        />
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
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name} 
            onRemove={() => handlePlayerRemove(item.name)}
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