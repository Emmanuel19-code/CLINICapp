import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useMove from '../hooks/useMove'

const ResetPassword = () => {
     const navigation = useNavigation();
     const [newpassword,setNewpassword] = useState();
     const [confirmpass,setConfirmpass] = useState();
     const {moveToVerification} = useMove()
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
    
  return (
     <SafeAreaView className="bg-white h-full items-center">
        <View className="mb-10 items-center mt-10">
          <Text className="text-center font-bold text-2xl w-48">New Password</Text>
       </View>
       <View className="w-72 border-b border-blue-400 p-3 mb-5 mt-4">
              <TextInput placeholder='New Password'
              keyboardType='default'
              value={newpassword}
              onChangeText={(text)=>setNewpassword(text)}
              />
      </View>
      <View className="w-72 border-b border-blue-400 p-3 mb-5 mt-4">
              <TextInput placeholder='Confirm Password'
              keyboardType='default'
              value={confirmpass}
              onChangeText={(text)=>setConfirmpass(text)}
              />
      </View>
        <TouchableOpacity className="bg-blue-600 w-72 rounded-full p-3 mb-10" onPress={moveToVerification}>
              <Text className="text-white text-center font-bold text-lg">
                Submit
              </Text>
         </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResetPassword

