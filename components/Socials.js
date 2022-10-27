import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Socials = () => {
  return (
    <View className="flex-row space-x-10 m-8">
      <TouchableOpacity className="border border-gray-200 py-3 px-6 rounded-lg">
        <Image source={require("../images/goog.png")} className="h-10 w-10" />
      </TouchableOpacity>

      <TouchableOpacity className="border border-gray-200 py-3 px-6 rounded-lg">
        <Image source={require("../images/apple.png")} className="h-10 w-10" />
      </TouchableOpacity>

      <TouchableOpacity className="border border-gray-200 py-3 px-6 rounded-lg">
        <Image
          source={require("../images/facebook.png")}
          className="h-10 w-10"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Socials;
