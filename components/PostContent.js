import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CONTENT } from "./data/contentData";

const PostContent = () => {
  let squares = [];
  let numOfSquares = 4;

  for (let index = 0; index < numOfSquares; index++) {
    squares.push();
  }

  return (
    <View className="mt-4 flex-row flex-wrap justify-center">
      {CONTENT.map((content, index) => (
        <View key={index}>
          <TouchableOpacity className="p-[1]">
            <Image
              source={{ uri: content.imageUrl }}
              className=" h-40 w-[136]"
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default PostContent;
