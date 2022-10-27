import { View, TouchableOpacity } from "react-native";
import React from "react";
import { PlusIcon } from "react-native-heroicons/solid";

const AddBottom = () => {
  return (
    <View className="p-1">
      <TouchableOpacity className="bg-blue-300 rounded-full p-2 shadow-lg">
        <PlusIcon className="" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddBottom;
