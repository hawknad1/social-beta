import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  ChatBubbleLeftEllipsisIcon,
} from "react-native-heroicons/outline";

const Comment = () => {
  const [removeColor, setRemoveColor] = useState(false);

  const changeBg = () => {
    setRemoveColor(true);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={changeBg}
        className={`flex-row p-2 ${
          !removeColor ? "bg-white" : "bg-blue-50"
        } justify-between items-center`}
      >
        <TouchableOpacity className="">
          <View className="flex-row space-x-2 items-center">
            <View className="">
              <Image
                source={require("../../images/7.jpg")}
                className="h-14 w-14 rounded-lg"
              />
            </View>
            <View className="flex-row flex-wrap w-[280]">
              <Text className="font-bold text-base text-gray-800 items-center">
                Sandra Holmes
                <Text className="text-gray-500 font-normal space-x-2 text-base">
                  {" "}
                  commented on your post
                </Text>
              </Text>
              <View className="flex-row items-center space-x-2">
                <Text className=" text-blue-400 text-sm font-medium">
                  @nanadee854
                </Text>
                <Text className="text-gray-400  text-sm ">· 30mins ago</Text>
              </View>
            </View>

            <View className="justify-center">
              <ChatBubbleLeftEllipsisIcon color="#5F9DF7" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <EllipsisVerticalIcon color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
      <View className="border-b border-white" />
    </View>
  );
};

export default Comment;
