import { View, Text,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Verification = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
     <SafeAreaView className="bg-white h-full p-4 justify-center items-center">
      <View>
         <Text>Confirmation</Text>
      </View>
       <Text className="text-center">
       Code message has been sent your email 
        Submit OTP code to verify your account.
        </Text>
        <View className="flex-row items-center m-4">
             <View className="rounded w-12 h-12 border border-blue-400 p-3 mb-5 m-2 bg-blue-400">
              <TextInput 
              keyboardType='default'
              />
            </View>
            <View className="rounded w-12 h-12 border border-blue-400 p-3 mb-5 m-2 bg-blue-400">
              <TextInput 
              keyboardType='default'
              />
            </View>
            <View className="rounded w-12 h-12 border border-blue-400 p-3 mb-5 m-2 bg-blue-400">
              <TextInput 
              keyboardType='default'
              />
            </View>
            <View className="rounded w-12 h-12 border border-blue-400 p-3 mb-5 m-2 bg-blue-400">
              <TextInput 
              keyboardType='default'
              />
            </View>
        </View>
        <TouchableOpacity className="bg-blue-600 w-48 rounded p-2 ">
              <Text className="text-white text-center font-bold text-lg">
                Submit
              </Text>
         </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Verification

