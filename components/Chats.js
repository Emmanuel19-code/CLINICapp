import { Text, View,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import useMove from '../hooks/useMove'

const Chats = ({chatName,messageCount,message,time,image}) => {
   const {moveToChatPage} = useMove();
  return (
    <TouchableOpacity className="m-2 border-b p-2 border-gray-300" onPress={moveToChatPage}>
      <View className="flex-row items-center">
        <View className="w-12 h-12 items-center justify-center rounded-full bg-slate-200">
         <Image
          source={require("../assets/doctor.png")}
          className="w-10 h-10"
         />
        </View>
        <View className="m-1 flex-1">
          <View className="flex-row items-center">
             <Text className="font-bold text-md flex-1">{chatName}</Text>
             <Text>{time}</Text>
          </View>
          <View className="flex-row items-center">
             <Text className="text-gray-500 text-sm flex-1" numberOfLines={1}>{message}</Text>
             <View className="w-auto p-1 bg-blue-600 rounded-full justify-center">
               <Text className="text-white text-center">{messageCount}</Text>
             </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Chats

