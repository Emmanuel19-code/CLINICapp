import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Sendermessage from '../components/Sendermessage';
import Receivedmessage from '../components/Receivedmessage';
import InputField from '../components/InputField';

const ChatPage = () => {
  const navigation = useNavigation()
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
     const back =() =>{
      navigation.goBack()
     }
  return (
    <SafeAreaView className="h-full w-full">
       <View className="bg-blue-500 h-16 p-1 justify-center">
         <View className="flex-row items-center m-2">
           <TouchableOpacity className="m-1" onPress={back}>
             <Ionicons name="arrow-back" size={24} color="white" />
           </TouchableOpacity>
            <View className="h-12 w-12 bg-gray-200 rounded-full justify-center items-center m-2">
               <Image
                source={require("../assets/doctor.png")}
                className="h-10 w-10"
               />
            </View>
            <Text>Dr Priscilla Asiedu</Text>
         </View>
       </View>
       <ScrollView className="p-2">
         <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
          <Sendermessage/>
         <Receivedmessage/>
       </ScrollView>
       <InputField/>
    </SafeAreaView>
  )
}

export default ChatPage

