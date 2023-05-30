import {View,Text,Image} from "react-native"

const DashboardSection = () => {
  return (
   <View className="mt-10">
           <Text className="text-2xl font-bold mt-5 ml-2">Our Services</Text>
            <View className="flex-row w-80 justify-between flex-wrap">
                <View className="m-1">
                   <Image
                   source={require("../assets/Vaccination.png")}
                   />
                </View>
                  <View className="m-1">
                   <Image
                   source={require("../assets/Dentistry.jpg")}
                   />
                </View>
                   <View className="m-1">
                   <Image
                   source={require("../assets/Lab.jpg")}
                   />
                </View>
                  <View className="m-1">
                   <Image
                   source={require("../assets/Counselling.jpg")}
                   />
                </View>
                   <View className="m-1">
                   <Image
                   source={require("../assets/Mental.jpg")}
                   />
                </View>
                  <View className="m-1">
                   <Image
                   source={require("../assets/Lab.jpg")}
                   />
                </View>
            </View>
        </View>
  )
}

export default DashboardSection