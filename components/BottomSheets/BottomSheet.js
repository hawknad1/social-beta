import { View, Text } from "react-native";
import React from "react";
import { useState, useCallback, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const BottomSheetPopUp = () => {
  const sheetRef = useRef(null);
  const handlePopUp = () => {
    sheetRef.current?.present();
  };
  // const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%"];

  // const handlePress = useCallback((index) => {
  //   sheetRef.current?.snapToIdenx(index);
  //   setIsOpen(true);
  // });
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={sheetRef} index={0} snapPoints={snapPoints}>
        <View>
          <Text>Hello Welcome</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

{
  /* <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <Text>Hello World</Text>
        </BottomSheetView>
      </BottomSheet> */
}

export default BottomSheetPopUp;
