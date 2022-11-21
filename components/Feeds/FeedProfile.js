import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
// import { POSTS } from "../data/postData";

// { image, name, fullname }

const FeedProfile = ({
  profilePic,
  user,
  subscribers,
  followers,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <View className="mt-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row space-x-2 m-2">
          <TouchableOpacity className="border-2 justify-center items-center border-blue-400 rounded-full h-[45px] w-[45px]">
            <Image
              source={{ uri: profilePic }}
              className="w-10 h-10 rounded-full"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserProfileScreen", {
                name: user,
                image: profilePic,
                subscribers,
                followers,
                description,
              })
            }
          >
            <Text className="font-medium text-base">{user}</Text>
            <Text className="text-gray-400 text-xs">1 Hour ago</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="m-1">
          <EllipsisVerticalIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedProfile;
