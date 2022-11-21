import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import CreateContent from "../Create/CreateContent";

const PopUpModal = () => {
  const { bottomSheetModalRef, snapPoints, handleModalPopUp } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  //   const bottomSheetModalRef = useRef(null);
  //   const snapPoints = ["25%", "48%"];

  //   function handleModalPopUp() {
  //     bottomSheetModalRef.current?.present();
  //   }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 35 }}
      >
        <View>
          <CreateContent />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default PopUpModal;
