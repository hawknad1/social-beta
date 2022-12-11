import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  UserPlusIcon,
  ChatBubbleBottomCenterTextIcon,
} from "react-native-heroicons/outline";

const Bottoms = () => {
  const [follow, setFollow] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const following = () => {
    setFollow(!follow);
  };

  const Subscribed = () => {
    setSubscribe(!subscribe);
  };

  return (
    <View>
      <View className="flex-row justify-center items-center space-x-2">
        {follow ? (
          <TouchableOpacity
            onPress={following}
            className="flex-row items-center bg-gray-100 px-3 py-1 rounded-md"
          >
            <Text className="font-medium text-base text-center">Following</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={following}
            className="flex-row justify-center items-center space-x-1 bg-[#1A132F] px-3 py-1 rounded-md"
          >
            <UserPlusIcon size={20} color="white" />
            <Text className="font-semibold text-base text-center text-white">
              Follow
            </Text>
          </TouchableOpacity>
        )}

        {subscribe ? (
          <TouchableOpacity
            onPress={Subscribed}
            className="bg-gray-100 px-3 py-1 rounded-md"
            disabled
          >
            <View
              className="flex-row items-center justify-center space-x-2"
              disabled={true}
            >
              <Text className="font-medium text-base text-center">
                Subscribed
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={Subscribed}
            className=" border-gray-400 border px-3 py-1 rounded-md"
          >
            <Text className="font-medium text-base text-center">Subscribe</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity className="bg-gray-100 px-2 py-1 rounded-md">
          <ChatBubbleBottomCenterTextIcon color="black" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottoms;
