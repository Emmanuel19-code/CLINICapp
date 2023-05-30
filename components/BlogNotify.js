import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const BlogNotify = () => {
  return (
    <TouchableOpacity className="m-2 border-b p-2 border-gray-300">
      <View className="flex-row items-center">
        <View className="w-12 h-12 items-center justify-center rounded-full bg-slate-200">
         <Image
          source={require("../assets/doctor.png")}
          className="w-10 h-10"
         />
        </View>
        <View className="m-1 flex-1">
          <Text className="font-bold text-md">Dr Priscilla Siedu </Text>
          <Text className="text-gray-500 text-sm">15 ways to deal with stress</Text>
          <Text className="text-sm text-blue-600">Read More</Text>
        </View>
        <View className="w-2 h-2 bg-blue-500 rounded-full"/>
      </View>
    </TouchableOpacity>
  )
}

export default BlogNotify

