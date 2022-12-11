import { View, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MenuSettings from "./MenuSettings";
import CreateContent from "./Create/CreateContent";

const AddBottom = () => {
  const userBottomSheet = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigation();

  const handlePopUp = () => {
    userBottomSheet.current?.present();
    setIsOpen(true);
  };
  // const { bottomSheetModalRef, snapPoints, handleModalPopUp } = useAuth();

  return (
    <View className="">
      <TouchableOpacity
        onPress={handlePopUp}
        className="bg-[#1A132F] h-8 w-12 justify-center items-center rounded-lg shadow-lg"
      >
        <PlusIcon color="white" />
      </TouchableOpacity>
      <BottomSheetModal
        ref={userBottomSheet}
        snapPoints={["33%"]}
        backgroundStyle={{ borderRadius: 15 }}
      >
        <View className="m-4">
          <CreateContent />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default AddBottom;

{
  /* <TouchableOpacity
        onPress={handleModalPopUp}
        // onPress={() => navigation.navigate("PopUp")}
        className="bg-gray-200 rounded-full p-1"
      >
        <PlusIcon size={35} color="white" />
      </TouchableOpacity> */
}
