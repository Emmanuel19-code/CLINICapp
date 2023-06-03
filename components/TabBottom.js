import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../screens/Notification'
import ChatsScreen from '../screens/ChatsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import DrawerRoutes from './DrawerRoutes';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
    const [notification,setNotification] = useState()
    const navigation = useNavigation()
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return (
    <Tab.Navigator>
       <Tab.Screen 
       options={{ 
        tabBarIcon:()=>(
        <AntDesign name='home' style={{fontSize:30,opacity:0.3}}/>
        ),
        tabBarActiveTintColor:'blue',
        }}
       name='Dashbaord' component={DrawerRoutes}/>
       <Tab.Screen 
       options={{ 
        tabBarIcon:()=>(
        <Feather name='message-circle' style={{fontSize:30,opacity:0.3}}/>
        ),
        tabBarActiveTintColor:'blue',
        }}
       name='Chat' component={ChatsScreen}/>
       <Tab.Screen 
       options={{ 
        tabBarIcon:()=>(
        <Feather name='bell' style={{fontSize:30,opacity:0.3}}/>
        ),
        tabBarBadge:notification,
        tabBarBadgeStyle:{
            backgroundColor:"#2563eb"
        },
        tabBarActiveTintColor:'blue',
        }}
       name='Notification' component={Notification}/>
       <Tab.Screen 
       options={{ 
        tabBarIcon:()=>(
        <FontAwesome5 name='user-circle' style={{fontSize:30,opacity:0.3}}/>
        ),
        tabBarActiveTintColor:'blue',
        }}
       name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default TabBottom

