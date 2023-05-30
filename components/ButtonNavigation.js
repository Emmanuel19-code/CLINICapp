import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import useMove from '../hooks/useMove'
import { View,TouchableOpacity,Text } from 'react-native'

const ButtonNavigation = () => {
    const {moveToDashboard,moveToChats,moveToProfile,moveToNotification} = useMove()
    const [notification,setNotification] = useState(true)
  return (
    <View className=" bg-blue-300 w-full p-4 flex-row items-center justify-around">
           <TouchableOpacity>
             <AntDesign name='home' style={{fontSize:30,opacity:0.3}}
             onPress={moveToDashboard}
             />
          </TouchableOpacity>
           <TouchableOpacity>
             <Feather name='message-circle' style={{fontSize:30,opacity:0.3}}
             onPress={moveToChats}
             />
          </TouchableOpacity>
            <TouchableOpacity
            onPress={moveToProfile}
            >
             <FontAwesome5 name='user-circle' style={{fontSize:30,opacity:0.3}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToNotification}>
             <Feather name='bell' style={{fontSize:30,opacity:0.3}}/>
             {
              notification &&
              <View className="absolute bg-red-500 right-0 rounded-full p-1 w-3 h-3">
              </View>
             }
          </TouchableOpacity>
          {
            /*
            <TouchableOpacity >
             <AntDesign name='setting' style={{fontSize:30,opacity:0.3}}/>
          </TouchableOpacity>
            */
          }
        </View>
  )
}

export default ButtonNavigation