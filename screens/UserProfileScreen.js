import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  FolderArrowDownIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Post from "../components/Post";
import { CheckBadgeIcon } from "react-native-heroicons/solid";
import useAuth from "../hooks/useAuth";
import { auth } from "../config/firebase";

const UserProfileScreen = ({ route, navigation }) => {
  // const { name, setName, fullName, data } = useAuth();
  const { name, image, description, subscribers, followers } = route.params;

  // const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="relative bg-white"
    >
      <Image source={require("../images/b.jpg")} className="h-[250] w-full" />
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-3 "
      >
        <ChevronLeftIcon color="white" size={30} />
      </TouchableOpacity>

      <View className="items-center bottom-14">
        <View className="border-4 border-white rounded-full">
          <Image source={{ uri: image }} className=" h-24 w-24 rounded-full" />
        </View>
        <View className="flex-row items-center space-x-1">
          <Text className="font-medium text-base">{name.toLowerCase()}</Text>
          <CheckBadgeIcon size={18} className="" />
        </View>
        <Text className="text-base text-center mt-1 w-[360]">
          {description}
        </Text>

        <View className="flex-row space-x-4 items-center mt-4">
          <View className="items-center p-4">
            <Text className="font-bold text-lg">{followers}</Text>
            <Text className="font-medium text-sm text-gray-500">Followers</Text>
          </View>
          <View className="items-center p-4">
            <View className="border-r  border-gray-200" />
            <Text className="font-bold text-lg">{subscribers}</Text>
            <Text className="font-medium text-sm text-gray-500">
              Subscribers
            </Text>
          </View>
          <View className="items-center p-4 ">
            <Text className="font-bold text-lg">500</Text>
            <Text className="font-medium text-sm text-gray-500">Following</Text>
          </View>
        </View>
        <TouchableOpacity className="border border-gray-300 p-2 rounded-md w-48 items-center">
          <Text className="font-medium">Edit profile</Text>
        </TouchableOpacity>
        <View className="flex-row space-x-12 border-b border-gray-200 shadow-sm mt-4">
          <TouchableOpacity className="p-4 items-center">
            <FolderArrowDownIcon color="gray" />
            <Text className="font-medium text-sm">All Post</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center">
            <UserGroupIcon color="gray" />
            <Text className="font-medium text-sm">Premium</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center">
            <CurrencyDollarIcon color="gray" />
            <Text className="font-medium text-sm">Earnings</Text>
          </TouchableOpacity>
        </View>
        <Post />
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
