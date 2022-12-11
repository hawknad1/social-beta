import { View, Text } from "react-native";
import React from "react";

const Caption = ({ post }) => {
  return (
    <View className="ml-4 w-96">
      <Text>
        <Text className="font-semibold text-[16px]">{`${post.userName.toLowerCase()}`}</Text>
        <Text className="text-[15px]"> {post.caption}</Text>
      </Text>
    </View>
  );
};

export default Caption;
