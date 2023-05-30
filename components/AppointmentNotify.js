import { Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const AppointmentNotify = ({doctorName,title}) => {
  return (
    <View className="m-2 border-b p-2 border-gray-300">
      <View className="flex-row items-center">
        <View className="w-12 h-12 items-center justify-center rounded-full bg-slate-200">
         <Image
          source={require("../assets/doctor.png")}
          className="w-10 h-10"
         />
        </View>
        <View className="m-1 flex-1">
          <Text className="font-bold text-md">Dr Priscilla Siedu </Text>
          <Text className="text-gray-500 text-sm">You have an appointment in 15 mins</Text>
          <View className="flex-row items-center">
             <TouchableOpacity className="bg-blue-400 p-1 rounded mr-1">
                 <Text className="text-white">Marked</Text>
             </TouchableOpacity>
            <TouchableOpacity className="bg-blue-400 p-1 rounded mr-1">
                <Text className="text-white">ReShedule</Text>
             </TouchableOpacity>
          </View>
        </View>
        <View className="w-2 h-2 bg-blue-500 rounded-full"/>
      </View>
    </View>
  )
}

export default AppointmentNotify

