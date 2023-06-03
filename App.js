import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen"
import DoctorDetailsScreen from './screens/DoctorDetailsScreen';
import BookAppointment from './screens/BookAppointment';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { SafeAreaProvider, } from "react-native-safe-area-context"
import ChatPage from './screens/ChatPage';
import TabBottom from './components/TabBottom';
import Register from './components/Register';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import Verification from './screens/Verification';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  name="Home" component={HomeScreen}/> 
              <Stack.Screen  name="Dashboard" component={TabBottom}/>
              <Stack.Screen  name='DoctorProfile' component={DoctorDetailsScreen}/>   
              <Stack.Screen  name='Appointment' component={BookAppointment}/>
              <Stack.Screen  name='ChatPage' component={ChatPage}/>
              <Stack.Screen name='Register' component={Register}/>
              <Stack.Screen name='Login' component={AuthenticationScreen}/>
              <Stack.Screen name='Forgot Password' component={ForgotPassword}/>
              <Stack.Screen name='ResetPassword' component={ResetPassword}/>
              <Stack.Screen name='Verification' component={Verification}/>
         </Stack.Navigator>
    </NavigationContainer>
   </SafeAreaProvider>
  )
}

