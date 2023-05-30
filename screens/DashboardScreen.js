import { SafeAreaView } from "react-native-safe-area-context"
import BottomSheets from "../components/BottomSheet"
import Dashboard from "../components/Dashboard"
import { View } from "react-native"
const DashboardScreen = () => {
  return (
   <SafeAreaView className="flex h-full">
       <BottomSheets/>
   </SafeAreaView>
  )
}

export default DashboardScreen