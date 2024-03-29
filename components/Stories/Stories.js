import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Stories = ({ image, name }) => {
  return (
    <View className="mt-4 justify-center items-center space-y-2">
      <View className="px-3">
        <TouchableOpacity className="border-2 justify-center items-center border-dashed border-blue-400 rounded-full h-[70px] w-[70px]">
          <Image source={{ image }} className="w-16 h-16 rounded-full" />
        </TouchableOpacity>
      </View>
      <Text className="font-medium text-base items-center">{name}</Text>
    </View>
  );
};

export default Stories;
