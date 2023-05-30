import { Text,View,Image,TouchableOpacity} from "react-native"
import useMove from "../hooks/useMove"

const DashboardHeader = () => {
   const {OpenDrawer} = useMove()
  return (
    <View className="flex-row items-center ">
                <View className="flex-row items-center ">
                   
                 <TouchableOpacity onPress={OpenDrawer}>
                   <Image
                  source={ require("../assets/Mask.jpg")}
                  className="w-12 h-12"
                 />
                 </TouchableOpacity>
                
                 <View className="flex-1 ml-2">
                    <Text className="text-lg font-bold">Hi Emmanuel</Text>
                    <Text className="text-gray-400 font-bold">How are you doing Today</Text>
                 </View>
                  <View className=" items-center">
                     <Image
                    source={require("../assets/Group1.jpg")}
                     className=""
                    />
                </View>
             </View>
        </View>
  )
}

export default DashboardHeader