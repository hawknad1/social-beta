import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  PaperAirplaneIcon,
  CurrencyDollarIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
// import { POSTS } from "../data/postData";

// { image, caption, comments, likes, share }

const FeedContent = ({ caption, imageUrl, likes, share }) => {
  return (
    <View className="m-2">
      <Text className="text-base ml-4 font-normal mb-2">{caption}</Text>
      <TouchableOpacity>
        <Image
          source={{ uri: imageUrl }}
          className=" w-[395px] h-[300px] rounded-lg"
        />
      </TouchableOpacity>
      <View className="flex-row justify-between">
        <View className="flex-row items-center space-x-4 mt-3 ml-2">
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity className="">
              <HeartIcon color="gray" size={25} />
            </TouchableOpacity>
            <Text className="font-medium text-sm text-gray-500">{likes}</Text>
          </View>

          <TouchableOpacity>
            <ChatBubbleLeftEllipsisIcon color="gray" size={20} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ShareIcon color="gray" size={20} />
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
