import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen"
import DoctorsScreen from "./screens/DoctorsScreen"
import DoctorDetailsScreen from './screens/DoctorDetailsScreen';
import ChatsScreen from './screens/ChatsScreen';
import BookAppointment from './screens/BookAppointment';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { SafeAreaProvider, } from "react-native-safe-area-context"
import DrawerRoutes from './components/DrawerRoutes';
import ProfileScreen from './screens/ProfileScreen';
import Notification from './screens/Notification';
import ChatPage from './screens/ChatPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  name="Home" component={HomeScreen}/> 
              <Stack.Screen  name='Authentication' component={AuthenticationScreen}/>
              <Stack.Screen  name="Dashboard" component={DrawerRoutes}/>
              <Stack.Screen  name='Doctors' component={DoctorsScreen}/>
              <Stack.Screen  name='DoctorProfile' component={DoctorDetailsScreen}/>   
              <Stack.Screen  name='Chat' component={ChatsScreen}/>
              <Stack.Screen  name='Appointment' component={BookAppointment}/>
              <Stack.Screen  name='Profile' component={ProfileScreen}/>
              <Stack.Screen  name='Notification' component={Notification}/>
              <Stack.Screen  name='ChatPage' component={ChatPage}/>
         </Stack.Navigator>
    </NavigationContainer>
   </SafeAreaProvider>
  )
}

