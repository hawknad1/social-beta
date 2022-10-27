import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Post = () => {
  return (
    <View className="mt-3">
      <View className="flex-row">
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/a.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/1.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/3.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row">
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/2.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/b.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
        <TouchableOpacity className="p-1">
          <Image
            source={require("../images/a.jpg")}
            className="h-32 w-28 rounded-lg"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
