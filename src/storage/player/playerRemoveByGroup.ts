import AsyncStorage from "@react-native-async-storage/async-storage"
import { playersGetByGroup } from "./playersGetByGroups"
import { PLAYER_COLLECTION } from "../storageConfig"

export async function playerRemoveByGroup(name: string, group: string) {
  try {
    
    const storage = await playersGetByGroup(group)

    const filtered = storage.filter(player => player.name !== name) 

    const players = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)

  } catch (error) {
    throw error
  }
}