import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { POSTS } from "../data/postData";
import { CheckBadgeIcon } from "react-native-heroicons/solid";

const FeedProfile = ({ post }) => {
  const navigation = useNavigation();
  return (
    <View className="mt-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row space-x-2 m-2">
          <TouchableOpacity className="border-2 justify-center items-center border-blue-400 rounded-full h-[45px] w-[45px]">
            <Image
              source={{ uri: post.profilePic }}
              className="w-10 h-10 rounded-full"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserProfileScreen", {
                name: post.user,
                image: post.profilePic,
                description: post.description,
                subscribers: post.subscribers,
                followers: post.followers,
                verified: post.verified,
                userName: post.userName,
              })
            }
          >
            {post.verified ? (
              <View className="flex-row items-center">
                <Text className="font-medium text-base">
                  {post.userName.toLowerCase()}
                </Text>
                <CheckBadgeIcon size={18} />
              </View>
            ) : (
              <Text className="font-medium text-base">
                {post.userName.toLowerCase()}
              </Text>
            )}

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
