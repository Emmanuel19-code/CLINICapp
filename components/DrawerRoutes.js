import CustomDrawer from './CustomDrawer';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from '../screens/DashboardScreen';
import ChatsScreen from '../screens/ChatsScreen';
import Pharmacy from '../screens/Pharmacy';
import { useLayoutEffect} from "react"
import { useNavigation } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Fontisto } from '@expo/vector-icons';
import DoctorsScreen from '../screens/DoctorsScreen';




const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
 const navigation = useNavigation()
    useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
  return(
   <Drawer.Navigator
      screenOptions={{
       drawerStyle: {
       backgroundColor: 'white',
      },
    }}
     drawerContent={props =><CustomDrawer {...props}/>}
    >
          <Drawer.Screen 
           options={{ 
             drawerIcon:()=>(
              <MaterialIcons name="dashboard" size={20} color="black" />
             )
            }}
          name='Dashboard' component={DashboardScreen}/>
          <Drawer.Screen 
          options={{ 
             drawerIcon:()=>(
              <Ionicons name="chatbubble" size={20} color="black" />
              )
           }}   
          name='Chat' component={ChatsScreen}/>
          <Drawer.Screen 
          options={{ 
            drawerIcon:()=>(
                <Entypo name="shop" size={20} color="black" />
            )
           }}
          name='Pharmacy' component={Pharmacy}/>
          <Drawer.Screen 
          options={{ 
             drawerIcon:()=>(
               <Fontisto name="doctor" size={20} color="black" />
             )
           }}
          name='Doctors' component={DoctorsScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerRoutes

