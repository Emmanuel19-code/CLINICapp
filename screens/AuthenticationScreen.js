import { Text,KeyboardAvoidingView,View,TextInput,TouchableOpacity,Image} from 'react-native'
import {useEffect, useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useMove from '../hooks/useMove'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const AuthenticationScreen = () => {
     const navigation = useNavigation();
     const {moveToRegister,moveToDashboard,moveToForgotPassword} = useMove()
     const [email,setEmail] = useState();
     const [password,setPassword] = useState()
     const [accessToken,setAccessToken] = useState()
     const [userInfo,setUserInfo] = useState(null)
     useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
     
 const [request, response, promptAsync] = Google.useAuthRequest({
  androidClientId: '473438982181-mpg186k9akf28mkl7lh01ce2eusgkpnv.apps.googleusercontent.com',
 // iosClientId: '473438982181-b577pliv3mdqb9nl7e4f4o9i2ba9t9n1.apps.googleusercontent.com',
     expoClientId:''
});
   
   useEffect(()=>{
        hanldeAuthentication()
   },[response])

   const hanldeAuthentication = async() =>{
        const user = await AsyncStorage.getItem("user")
        if(!user){
            if(response?.type === "success"){
              await getUserInfo(response.authentication.accessToken)
            }
        }else{
          setUserInfo(JSON.parse(user))
        }
   }
    
   const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("user",JSON.stringify(user))
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };


  return (
      <SafeAreaView className="bg-white h-full p-2 items-center">
                 <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="mb-10"
        >
            <View className="rounded-full w-72 border border-blue-400 p-3 mb-5">
              <TextInput placeholder='Email'
              keyboardType='default'
              value={email}
              onChangeText={(text)=>setEmail(text)}
              />
            </View>
            <View className="rounded-full w-72 border border-blue-400 p-3">
              <TextInput placeholder='Password'
              keyboardType='default'
              value={password}
              onChangeText={(text)=>setPassword(text)}
              secureTextEntry={true}
              />
            </View>
            <Text className="ml-1 mt-2"
            onPress={moveToForgotPassword}
            >Forgot Password?</Text>
        </KeyboardAvoidingView>
        <View className="mt-10">
            <TouchableOpacity className="bg-blue-600 w-72 rounded-full p-3 mb-10"
            onPress={moveToDashboard}
            >
              <Text className="text-white text-center font-bold text-lg">
                Login
              </Text>
         </TouchableOpacity>
          <TouchableOpacity className=" flex-row items-center w-72 rounded-full p-2  mb-5 border-blue-400 border"
           disabled={!request}
           onPress={() => {
                    promptAsync();
                }}
          >
               <Image
            source={ require("../assets/Google.jpg")}
             className="w-10 h-10 ml-2"
            />
              <Text className="ml-4">
                    Sign In with Google
              </Text>
         </TouchableOpacity>
        </View>
        <View className="flex-row items-center">
           <Text className="">
            Don’t have an account?
        </Text>
        <Text className="text-blue-600 ml-1" 
            onPress={moveToRegister}
            >
              Register
            </Text>
        </View>
      </SafeAreaView>
  )
}

export default AuthenticationScreen

