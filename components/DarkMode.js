import {  Pressable, Switch, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DarkMode = () => {
    const [darkmode,setDarkmode] = useState(false)
    const [device,setDevice] = useState(false)
    const {width} = useWindowDimensions();
    const [theme,setTheme] = useState("dim")
  return (
    <View className="flex-1 items-center p-2">
             <Text className="font-bold text-lg">Dark Mode</Text>
             <View className="flex-row items-center w-full justify-between">
               <Text className="text-md font-bold">Dark Mode</Text>
               <Switch value={darkmode} onChange={()=>setDarkmode(!darkmode)}/>
             </View>
             <View className="flex-row items-center w-full justify-between">
               <Text className="text-md font-bold">Use device settings</Text>
               <Switch value={device} onChange={()=>setDevice(!device)}/>
             </View>
             <Text className="w-full m-1 text-sm text-slate-500">
                Set Dark mode to use the Light or Dark mode selection located in your device display
                brightness settings
             </Text>
             <View
              className="bg-gray-50 border-b"
              style={{ 
                width:width,
                marginVertical:30,
                backgroundColor:"gray"
               }}
             />
             <Text className="text-md font-bold w-full">Theme</Text>
             <Pressable className="flex-row items-center w-full m-2 justify-between" onPress={()=>setTheme("dim")}>
                 <Text>Dim</Text>
                 {
                    theme==="dim"?
                    <AntDesign name="checkcircle" size={24} color="#4A98E9"/>
                    :
                    <Entypo name="circle" size={24} color="#56636f" />
                 }
             </Pressable>
              <Pressable className="flex-row items-center w-full m-2 justify-between" onPress={()=>setTheme("LightOut")}>
                 <Text>LightsOut</Text>
                 {
                    theme==="LightOut"?
                    <AntDesign name="checkcircle" size={24} color="#4A98E9" />
                    :
                    <Entypo name="circle" size={24} color="#56636f" />
                 }
             </Pressable>
    </View>
  )
}

export default DarkMode

