import { View, TouchableOpacity } from "react-native";
import React from "react";
import { PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const AddBottom = () => {
  const navigation = useNavigation();
  const { bottomSheetModalRef, snapPoints, handleModalPopUp } = useAuth();

  return (
    <View className="p-1">
      <TouchableOpacity
        onPress={handleModalPopUp}
        // onPress={() => navigation.navigate("PopUp")}
        className="bg-gray-200 rounded-full p-1"
      >
        <PlusIcon size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddBottom;
