import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@/storage/group/groupsGetAll";


export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      
      const data = await groupsGetAll()
      setGroups(data)

    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />


      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard  
            titleText={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar sua primeira turma?" />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
      />

     <Button 
      title="Criar nova turma" 
      onPress={handleNewGroup}
     />
    </Container>
  );
}

