import {Text, View,Image, TouchableOpacity, Platform, Linking } from 'react-native'
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import useMove from '../hooks/useMove'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const DoctorDetailsScreen = () => {
     const navigation = useNavigation()
     const {BookAppointment} = useMove()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
     const makecall = () =>{
       let phoneNumber = ''
       if(Platform.OS === "android"){
          phoneNumber=`tel:${"0503841634"}`
       }else{
        phoneNumber=`tel:${"0503841634"}`
       }
       Linking.openURL(phoneNumber)
     }
  return (
    <SafeAreaView>
      <View className="p-2 bg-blue-500 w-full flex-row items-center">
          <View className="flex-1">
             <Text className="text-white flex-row-reverse text-2xl">Dr Asiedu</Text>
             <Text className="text-white">cardiologist</Text>
          </View>
        <View className="flex-row-reverse items-center">
         <Image
          source={require("../assets/doctor.png")}
          className="w-12 h-12 rounded-full bg-blue-200"
         />
         <TouchableOpacity className="m-2">
           <Feather name="phone-call" size={24} color="white" onPress={makecall}/>
         </TouchableOpacity>
         <TouchableOpacity className="m-2">
              <Ionicons name="chatbox" size={24} color="white" className="" />
         </TouchableOpacity>
      </View>
    </View>
    <View className="mt-10 p-4">
        <View>
            <Text className="text-2xl">
               Experience
            </Text>
            <Text className="font-bold text-xl">
                8 years
            </Text>
        </View>
        <View className="mt-10">
             <Text className="font-bold text-xl">
                About
             </Text>
             <Text className="text-lg">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente pariatur nesciunt iste repudiandae, veritatis dolorum corrupti ducimus hic? Culpa cupiditate ipsam corrupti, eaque repudiandae perspiciatis consequatur magnam. Similique, odio placeat.
             </Text>
        </View>
    </View>
    <View className="p-2">
        <TouchableOpacity className="bg-blue-500 rounded-full p-2" onPress={BookAppointment}>
              <Text className="text-center text-white text-lg">Book Appointment</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default DoctorDetailsScreen

