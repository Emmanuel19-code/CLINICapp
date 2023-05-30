import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sendermessage = () => {
  return (
    <View className="ml-auto">
       <View className="bg-blue-400 w-4/5 flex-row m-2 p-3 rounded-md">
         <View className="flex-1">
             <Text className="text-white">Hello</Text>
          </View>
         <View className="absolute bottom-0 right-1">
           <Text className="text-white">7:00 AM</Text>
         </View>
      </View>
    </View>
  )
}

export default Sendermessage
