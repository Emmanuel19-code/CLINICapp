import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import Chats from '../components/Chats'
import ButtonNavigation from '../components/ButtonNavigation'

const ChatsScreen = () => {
   const navigation = useNavigation()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
    <SafeAreaView className="h-full">
      <Text className="bg-blue-500 text-white p-2 text-lg">Chats</Text>
      <ScrollView className="">
          <Chats
           chatName={"Dr Priscilla Asiedu"}
           time={"9:00 AM"}
           message={"Hello I took a look at your result will get back to you"}
           messageCount={1}
          />
          <Chats
           chatName={"Dr Emmanuel"}
           time={"8:30 PM"}
           message={"Your resutls will be ready soon"}
           messageCount={10}
          />
      </ScrollView>
      <ButtonNavigation/>
    </SafeAreaView>
  )
}

export default ChatsScreen

