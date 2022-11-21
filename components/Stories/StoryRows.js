import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import Stories from "./Stories";
import { USERS } from "../data/usersData";
import { POSTS } from "../data/postData";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { PlusSmallIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const StoryRows = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-2"
    >
      {USERS.map((story, index) => (
        <View key={index} className=" justify-center items-center space-y-1 ">
          <View className="px-3">
            <TouchableOpacity
              className="border-2 justify-center items-center border-dashed border-blue-400 rounded-full h-[70px] w-[70px]"
              onPress={() =>
                navigation.push("Status", {
                  name: story.fullName,
                  image: story.image,
                })
              }
            >
              {story.id == 1 ? (
                <View className="absolute z-10 bottom-0 right-1 bg-blue-500 rounded-full">
                  <PlusSmallIcon color="white" size={18} />
                </View>
              ) : null}
              <Image
                source={{ uri: story.image }}
                className="w-16 h-16 rounded-full"
              />
            </TouchableOpacity>
          </View>
          <Text className="font-medium text-sm text-gray-600 items-center">
            {story.fullName.toLowerCase()}
          </Text>
        </View>
      ))}
      {/* {USERS.map((story, index) => (
        <Stories
          key={index}
          image={{ uri: story.image }}
          name={
            story.fullName.length > 11
              ? story.fullName.slice(0, 10)
              : story.fullName
          }
        />
      ))} */}
    </ScrollView>
  );
};

export default StoryRows;
