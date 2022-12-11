import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PlusSmallIcon, SignalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { POSTS } from "../data/postData";
import { CheckBadgeIcon } from "react-native-heroicons/solid";

const StoryRows = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-2"
    >
      {POSTS.map((story, index) => (
        <View key={index} className=" justify-center items-center space-y-1">
          <View className="px-1">
            <View className="absolute z-10 flex-row items-center left-5 top-3">
              {story.live ? (
                <View className="flex-row items-center space-x-1">
                  <View className="bg-red-500 py-1 px-2 rounded-lg shadow-lg">
                    <SignalIcon color="white" size={12} />
                  </View>
                  <Text className="text-gray-200 font-semibold">14.6k</Text>
                </View>
              ) : (
                ""
              )}
            </View>

            <View className=" h-52 w-36 space-x-4 justify-center">
              <TouchableOpacity
                className=""
                onPress={() =>
                  navigation.push("Status", {
                    name: story.user,
                    image: story.profilePic,
                  })
                }
              >
                {story.id == 1 ? (
                  <View className="absolute  top-20 left-1/3 z-10 bg-blue-500 rounded-full">
                    <PlusSmallIcon color="white" size={35} />
                  </View>
                ) : null}
                <Image
                  source={{ uri: story.imageUrl }}
                  className="h-52 w-36  rounded-2xl shadow-lg"
                  // resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center space-x-1 absolute left-3 bottom-2">
            <View className="border border-dashed border-blue-400 rounded-full">
              <Image
                source={{ uri: story.profilePic }}
                className="h-7 w-7 rounded-full shadow"
              />
            </View>
            {story.verified ? (
              <View className="flex-row">
                <Text className="font-semibold text-sm text-white items-center">
                  {story.user.toLowerCase()}
                </Text>
                <CheckBadgeIcon size={18} />
              </View>
            ) : (
              <Text className="font-semibold text-sm text-white items-center">
                {story.user.toLowerCase()}
              </Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default StoryRows;
