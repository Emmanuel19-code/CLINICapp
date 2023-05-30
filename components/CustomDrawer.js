import { Text, View,TouchableOpacity,Image} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import BottomSheets from './BottomSheet';

const CustomDrawer = (props) => {
  const [darktheme,setDarktheme] = useState(false)
  return (
    <View className="flex-1">
       <DrawerContentScrollView {...props}>
       <View className="p-2">
           <View className="p-3 border-b border-slate-200">
            <View className="flex-row items-center">
                  <TouchableOpacity className="flex-1">
                   <Image
                  source={ require("../assets/Mask.jpg")}
                  className="w-12 h-12"
                 />
              </TouchableOpacity>
              <Ionicons name="ellipsis-vertical-circle" size={24} color="black" />
            </View>
           <View>
             <Text className="font-bold text-md">Emmanuel Kofi</Text>
             <Text className="text-slate-300 font-bold">
               Id
               <Text>1456982</Text>
             </Text>
           </View>
        </View>
       </View>
       <DrawerItemList {...props}/>
    </DrawerContentScrollView>
      <View className="absolute bottom-0 w-full p-4">
        <View>
            {
        darktheme?
        <FontAwesome5 name="lightbulb" size={24} color="black" />
        :
        <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="black" />
       }
        </View>
      </View>
   </View>
  )
}

export default CustomDrawer

