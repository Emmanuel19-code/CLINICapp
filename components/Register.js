import { StyleSheet, Text, View,Image,KeyboardAvoidingView,TextInput,TouchableOpacity, ScrollView} from 'react-native'
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePicker from './ImagePicker'
import useMove from '../hooks/useMove'




const Register = () => {
    const navigation = useNavigation()
    const {moveToLogin} = useMove()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
        <SafeAreaView className="bg-white h-full p-2 items-center">
         <View className="mb-10 items-center">
            <Text className="text-center font-bold text-3xl">Sign Up</Text>
        </View>
         <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
         className="">
            <View className=" w-72  border-blue-400 border-b p-3 m-2">
              <TextInput placeholder='Firstname'
              keyboardType='default'
              />
            </View>
            <View className=" w-72 border-b border-blue-400 p-3 m-2">
              <TextInput placeholder='Lastname'
              keyboardType='default'
              />
            </View>
             <View className=" w-72 border-b border-blue-400 p-3 m-2">
              <TextInput placeholder='Gender'
              keyboardType='default'
              />
            </View>
            <View className=" w-72 border-b border-blue-400 p-3 m-2">
              <TextInput placeholder='Email'
              keyboardType='default'
              />
            </View>
             <View className=" w-72 border-b border-blue-400 p-3 m-2">
              <TextInput placeholder='Password'
              keyboardType='default'
              secureTextEntry={true}
              />
            </View>
        </KeyboardAvoidingView>
         <View className="mt-10">
          <TouchableOpacity className="bg-blue-600 w-72 rounded p-3 mb-10"
          onPress={()=>{}}
          >
              <Text className="text-white text-center font-bold text-lg">
                Register
              </Text>
         </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center w-72 rounded-full p-2  mb-5 border-blue-400 border"
          >
               <Image
            source={ require("../assets/Google.jpg")}
             className="w-10 h-10 ml-2"
            />
              <Text className="ml-4">
                    Sign Up with Google
              </Text>
         </TouchableOpacity>
        </View>
        <View className="flex-row items-center">
          <Text>
            Already have an account?
          </Text>
          <Text className="text-blue-600 ml-1"
            onPress={moveToLogin}
            >
              Login
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Register



