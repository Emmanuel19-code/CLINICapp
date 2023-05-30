import { StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const BookAppointment = () => {
    const navigation = useNavigation()
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
    <SafeAreaView className="h-full">
      <Text className="text-center text-lg">Appointment Form</Text>
    </SafeAreaView>
  )
}

export default BookAppointment

