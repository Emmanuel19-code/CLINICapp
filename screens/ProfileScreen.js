import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import ButtonNavigation from '../components/ButtonNavigation'


const ProfileScreen = () => {
    const navigation = useNavigation()
  useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false,
       
       })
     }, [])
  return (
    <SafeAreaView className="h-full">
      <View className="bg-blue-600 p-2 w-full h-20  flex-row items-center">
        <View className="bg-gray-300 w-12 h-12 rounded-full  justify-center items-center">
            <Image
        source={require("../assets/Mask.jpg")}
        className="w-10 h-10"
        />
        </View>
        <Text className="text-white m-1">Personal Information</Text>
      </View>
      <View className="p-2 flex-1">
         <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Name</Text>
           <Text className="text-gray-400">Maxwell Emmanuel</Text>
         </View>
          <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Email</Text>
           <Text className="text-gray-400">joseph@gmail.com</Text>
         </View>
          <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Phone One</Text>
           <Text className="text-gray-400">+233 546506783</Text>
         </View>
          <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Hospital ID</Text>
           <Text className="text-gray-400">Id1456982</Text>
         </View>
          <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Phone Two</Text>
           <Text className="text-gray-400">N/A</Text>
         </View>
          <View className="p-2 border-b m-2 border-gray-200">
           <Text className="text-lg font-bold">Country</Text>
           <Text className="text-gray-400">Ghana</Text>
         </View>
      </View>
      <ButtonNavigation/>
    </SafeAreaView>
  )
}

export default ProfileScreen

