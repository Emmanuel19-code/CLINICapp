import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Receivedmessage = () => {
  return (
      <View className="m-1">
       <View className="bg-gray-300 w-4/5 flex-row m-1 p-3 rounded-md">
         <View className="flex-1">
             <Text className="text-white font-bold">Hi</Text>
          </View>
         <View className="absolute bottom-0 right-1">
           <Text className="text-white">7:00 AM</Text>
         </View>
      </View>
    </View>
  )
}

export default Receivedmessage

