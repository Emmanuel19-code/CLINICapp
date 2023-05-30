import { View,Text, ScrollView,Image,FlatList} from "react-native"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import DoctorProfile from "../components/DoctorProfile"
import ButtonNavigation from "../components/ButtonNavigation"

const DoctorsScreen = () => {
   const navigation = useNavigation()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
    <SafeAreaView className="h-full bg-white">
       <View className="">
            <View className="bg-blue-500 w-full  p-2">
               <Text className="text-white">Available</Text>
                <Text className="text-xl text-white font-bold">Doctors</Text>
             </View>
       </View>
             <ScrollView className="mb2 p-1 w-full">
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
                <DoctorProfile/>
             </ScrollView>
            <ButtonNavigation/>
    </SafeAreaView>
  )
}

export default DoctorsScreen