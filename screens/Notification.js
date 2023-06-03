import { ScrollView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppointmentNotify from '../components/AppointmentNotify';
import BlogNotify from '../components/BlogNotify';
import ShopNotify from '../components/ShopNotify';
import ButtonNavigation from '../components/ButtonNavigation';

const Notification = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
  return (
    <SafeAreaView className="h-full">
      <View className="bg-blue-600 h-14 p-2 justify-center">
         <Text className="text-lg text-white font-bold">Notification</Text>
      </View>
      <ScrollView className="p-2">
         <AppointmentNotify/>
         <BlogNotify/>
         <ShopNotify/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notification
