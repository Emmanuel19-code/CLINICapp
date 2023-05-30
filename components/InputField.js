import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputField = () => {
    const [message,setMessage] = useState("")
  return (
    <View className="p-2 bg-slate-500 m-1 flex-row items-center">
      <TextInput placeholder='Please enter a message'
        onChangeText={(text)=>setMessage(text)}
        className="flex-1"
      />
      <MaterialCommunityIcons name="send" size={24} color="white" />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({})