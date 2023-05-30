import { View,Text,Image,TouchableOpacity } from "react-native"
import useMove from "../hooks/useMove"

const DoctorProfile = ({name,years,occupation}) => {
  const {IndividualDoctors} = useMove()
  return (
    <TouchableOpacity onPress={IndividualDoctors}>
              <View className="flex-row bg-slate-100 p-2 m-2">
                   <View className="flex-1 m-1">
                      <Text className="font-bold text-xl">Dr Emmanuel Asiedu</Text>
                      <Text className="">cardiologist</Text>
                      <Text>
                          Experience 
                           <Text> 6 Years</Text>
                      </Text>
                      <Text className="text-blue-500 m-1">see more</Text>
                   </View>
                   <Image
                     source={require("../assets/doctor.png")}
                     className="w-15 h-15"
                   />
     </View>
    </TouchableOpacity>
  )
}

export default DoctorProfile