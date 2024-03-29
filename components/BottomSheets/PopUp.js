import React, { useCallback, useMemo, useRef, useState } from "react";
import { Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import * as Animatable from "react-native-animatable";
import HomeScreen from "../../screens/HomeScreen";
import CreateContent from "../Create/CreateContent";

export default function PopUp() {
  const bottomSheetRef = React.useRef(<BottomSheet />, null);
  const snapPoints = useMemo(() => ["30%"], []);
  const [isOpen, setIsOpen] = useState(true);

  // const [isOpen, setIsOpen] = useState(true);
  // const snapPoints = ["40%"];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backdropComponent={HomeScreen}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setIsOpen(false)}
    >
      <BottomSheetView>
        <CreateContent />
      </BottomSheetView>
    </BottomSheet>
  );
}
