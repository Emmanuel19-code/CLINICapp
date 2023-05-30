import React, { useRef, useMemo, useState,useCallback } from "react";
import {  View } from "react-native";
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import Dashboard from "./Dashboard";
import DarkMode from "./DarkMode";

const BottomSheets = (props) => {
  const bottomSheetModalRef = useRef(null);
  const [isOpen,setIsopen] = useState(true)
  const snapPoints = useMemo(() => ["50%"]);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
   handlePresentModalPress()
  return (
    <BottomSheetModalProvider>
     <View className="flex-1  bg-gray-100">
      <Dashboard/>
      <BottomSheetModal
       ref={bottomSheetModalRef}
       snapPoints={snapPoints}
       backgroundStyle={{ 
        borderRadius:50
       }}
       >
        <DarkMode/>
       </BottomSheetModal>
    </View>
    </BottomSheetModalProvider>
  )
}

export default BottomSheets

