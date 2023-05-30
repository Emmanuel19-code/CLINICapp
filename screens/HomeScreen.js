import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useMove from '../hooks/useMove'



const HomeScreen = () => {
  const navigation = useNavigation();
  const {moveToDashboard,BookAppointment,Authentication} = useMove()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
    <SafeAreaView className="bg-white h-full p-2 flex items-center justify-center">
         <View>
           <Image
            source={require("../assets/Mask.jpg")}
           />
         </View>
         <View>
            <Text className="w-64 text-center font-bold mb-5 text-lg">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             A eleifend amet fringilla in aliquet nunc. 
             Laoreet nunc egestas eget id ultrices justo.
           </Text>
         </View>
         <View>
            <TouchableOpacity
            onPress={Authentication}
            >
              <Text className="bg-blue-600 text-white rounded-md p-3 font-bold mb-10">
                GET STARTED
              </Text>
           </TouchableOpacity>
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen