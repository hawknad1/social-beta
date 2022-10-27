import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";

const FeedProfile = ({ image, name, fullname }) => {
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between">
        <View className="flex-row space-x-2 m-2">
          <TouchableOpacity className="border-2 justify-center items-center border-blue-400 rounded-full h-[45px] w-[45px]">
            <Image source={image} className="w-10 h-10 rounded-full" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-medium text-base">{fullname}</Text>
            <Text className="text-gray-400 text-xs">1 Hour ago</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="m-1">
          <EllipsisVerticalIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedProfile;
