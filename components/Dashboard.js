import { Text,View,Image,TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ButtonNavigation from "../components/ButtonNavigation"
import { useLayoutEffect,useEffect, useState} from "react"
import { useNavigation } from "@react-navigation/native"
import DashboardHeader from "../components/DashboardHeader"
import DashboardSection from "../components/DashboardSection"
import useMove from "../hooks/useMove"
import * as LocalAuthentication from 'expo-local-authentication';

const Dashboard = () => {
  const navigation = useNavigation()
     const {BookAppointment} = useMove()
     const [day,setDay] = useState('')
     const [time,setTime]= useState('')
     const[hour,setHour] = useState('')
     const [minutes,setMinutes] = useState('')
     const [month,setMonth] = useState('')
       useLayoutEffect(() => {
       navigation.setOptions({
       headerShown:false
       })
     }, [])
       useEffect(()=>{
     // async function authenticate () {
       // const result = await LocalAuthentication.authenticateAsync();
      //}
      //authenticate()
       let hours = new Date().getHours()
       let minutes = new Date().getMinutes()
       let month = new Date().getMonth()
       setHour(hours)
       if(minutes < 10){
        setMinutes("0" + minutes)
       }
       getDay()
       getMonth()
  },[])
  const getDay = () =>{
     let day = new Date().getDay();
     switch(day){
       case 0 :
        setDay("Sunday")
        break;
       case 1:
        setDay("Monday")
        break;
       case 2:
        setDay("Tuesday")
        break;
       case 3:
        setDay("Wednesday")
        break;
       case 4:
        setDay("Thursday")
        break;
       case 5:
        setDay("Friday")
        break;
       case 6:
        setDay("Saturday")
        break;
     }
      
  }
  const getMonth = () =>{
    let month = new Date().getMonth()+1;
    switch (month) {
        case 1:
            setMonth("January")
            break;
        case 2:
            setMonth("February")
            break;
        case 3:
            setMonth("March")
            break;
        case 4:
            setMonth("April")
            break;
        case 5:
            setMonth("May")
            break;
        case 6:
            setMonth("June")
            break;
        case 7:
            setMonth("July")
            break;
        case 8:
            setMonth("August")
            break;
        case 9:
            setMonth("September")
            break;
        case 10:
            setMonth("October")
            break;
        case 11:
            setMonth("November")
            break;
        case 12:
            setMonth("December")
            break;
    }
  }
  return (
   <View className="bg-white h-full flex ">
        <View className="flex-1 p-2">
          <DashboardHeader/>
          <Text className="text-lg font-bold  m-2">Upcoming appointments</Text>
           <View className="bg-blue-400 p-5 mt-4 w-full justify-between rounded-3xl flex-row items-center">
            <View className=" flex-row">
               <View className="flex-1">
                  <Text className="text-white text-lg">
                    Dr Kwame Owusu
                  </Text>
                  <Text className="text-xs">
                    Dr Kwame Owusu
                  </Text>
                  <View className="mt-5">
                     <Text className="text-white">{day}, {month} 06</Text>
                     <Text className="text-white">{hour} : {minutes} GMT</Text>
                  </View>
               </View>
                <View className="">
                     <Image
                    source={require("../assets/scientist-guy.jpg")}
                     className=""
                    />
                </View>
            </View>
        </View>
          <View className="flex-row-reverse">
             <TouchableOpacity className="" onPress={BookAppointment}>
               <Text className="bg-blue-500 text-white w-36 p-2 rounded-xl font-bold text-center mt-3">
                Book Appointment
               </Text>
             </TouchableOpacity>
          </View>
         <DashboardSection/>
        </View>
       <ButtonNavigation/>
   </View>
  )
}

export default Dashboard

