import { Text,Image,View,TextInput,TouchableOpacity} from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useMove from "../hooks/useMove"

const ForgotPassword = () => {
   const navigation = useNavigation();
   const {moveToNewPassword} = useMove()
     const [email,setEmail] = useState()
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
     
  return (
    <SafeAreaView className="bg-white h-full items-center">
       <View className="mb-10 items-center mt-10">
          <Text className="text-center font-bold text-2xl w-48">Forgot Password</Text>
       </View>
       <View className="items-center bg-blue-400 w-32 h-32 p-2 rounded-full justify-center border-blue-300 border-4">
         <Image
         source={require("../assets/Lock.jpg")}
         className=""
         />
      </View>
      <Text className="text-lg mt-4">
         Please enter your email address
      </Text>
       <View className="w-72 border-b border-blue-400 p-3 mb-5 mt-4">
              <TextInput placeholder='Email'
              keyboardType='default'
              value={email}
              onChangeText={(text)=>setEmail(text)}
              />
      </View>
       <TouchableOpacity className="bg-blue-600 w-72 rounded- p-3 "
        onPress={moveToNewPassword}
        >
              <Text className="text-white text-center font-bold text-lg">
                Submit
              </Text>
         </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ForgotPassword