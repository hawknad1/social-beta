import React, { useCallback, useMemo, useRef, useState } from "react";
import { Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import * as Animatable from "react-native-animatable";
import HomeScreen from "../../screens/HomeScreen";
import CreateContent from "../Create/CreateContent";

const SettingsPopUp = () => {
  const bottomSheetRef = React.useRef(<BottomSheet />, null);
  const snapPoints = useMemo(() => ["30%"], []);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backdropComponent={HomeScreen}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setIsOpen(false)}
    >
      <BottomSheetView>
        <Text>Settings</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default SettingsPopUp;
