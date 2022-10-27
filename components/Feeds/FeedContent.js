import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  PaperAirplaneIcon,
  CurrencyDollarIcon,
  ShareIcon,
} from "react-native-heroicons/outline";

const FeedContent = ({ image, caption, comments, likes, share }) => {
  return (
    <View className="m-2">
      <Text className="text-base ml-4 font-normal mb-2">{caption}</Text>
      <TouchableOpacity>
        <Image source={image} className=" w-[395px] h-[300px] rounded-lg" />
      </TouchableOpacity>
      <View className="flex-row justify-between">
        <View className="flex-row space-x-4 mt-3">
          <TouchableOpacity className="flex-row items-center space-x-1">
            <HeartIcon color="gray" size={20} />
            <Text>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <ChatBubbleLeftEllipsisIcon color="gray" size={20} />
            <Text>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <ShareIcon color="gray" size={20} />
            <Text>{share}</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center mt-3">
          <TouchableOpacity className="flex-row items-center p-2 mr-2">
            <CurrencyDollarIcon color="gray" size={20} />
            <Text className="font-medium">TIP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="border-b mt-4 border-gray-200" />
    </View>
  );
};

export default FeedContent;
