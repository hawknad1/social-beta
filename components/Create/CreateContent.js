import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  SignalIcon,
  ArrowUpTrayIcon,
  SquaresPlusIcon,
} from "react-native-heroicons/outline";

const CreateContent = () => {
  return (
    <View className="m-4">
      <TouchableOpacity className="flex-row items-center space-x-2">
        <View className="bg-gray-100 p-3 rounded-full">
          <SquaresPlusIcon color="#47B5FF" />
        </View>
        <Text className="text-base text-gray-700 font-medium">Create post</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center space-x-2 mt-5">
        <View className="bg-gray-100 p-3 rounded-full">
          <ArrowUpTrayIcon color="#42855B" />
        </View>
        <Text className="text-base text-gray-700 font-medium">
          Upload Video
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center space-x-2 mt-5">
        <View className="bg-gray-100 p-3 rounded-full">
          <SignalIcon color="#EB1D36" />
        </View>
        <Text className="text-base text-gray-700 font-medium">Go live</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateContent;
