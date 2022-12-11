import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  HeartIcon,
  FilmIcon,
  EllipsisVerticalIcon,
  SquaresPlusIcon,
  ArrowLeftIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import PostContent from "../components/PostContent";
import Bottoms from "../components/Bottoms/Bottoms";
import BottomTab from "../components/BottomTab";
// import { BackgroundImage } from "@rneui/base";

const UserProfileScreen = ({ route, navigation }) => {
  const [press, setPress] = useState(false);

  const {
    name,
    image,
    description,
    subscribers,
    followers,
    verified,
    userName,
  } = route.params;

  const handlePress = () => {
    setPress(!press);
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row py-2 items-center justify-between z-10">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="bg-gray-100 p-1 rounded-full left-4"
        >
          <ArrowLeftIcon color="black" size={25} />
        </TouchableOpacity>
        {verified ? (
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold text-base">{name}</Text>
            <CheckCircleIcon size={18} />
          </View>
        ) : (
          <View>
            <Text className="font-bold text-base">{name}</Text>
          </View>
        )}

        <TouchableOpacity className="bg-gray-100 p-1 rounded-full right-4">
          <EllipsisVerticalIcon color="black" size={25} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <View className=" ">
          <View className="m-2 relative">
            <ImageBackground
              source={{ uri: image }}
              imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              className="w-full h-44"
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: image }}
                  className=" h-28 w-28 rounded-full ml-auto mr-auto top-28"
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View className="ml-auto mr-auto items-center mt-10">
            {/* <Image
              source={{ uri: image }}
              className=" h-28 w-28 rounded-full ml-auto mr-auto"
            /> */}
            <Text className="mt-1 text-base text-blue-400">@{userName}</Text>
            <Text className="text-gray-500 font-medium text-base w-[350] text-center">
              {description} ggdgfgsdgsfsgs afsggsgs
            </Text>
          </View>
          <View className="flex-row justify-center p-4 space-x-8 items-center">
            <View className="items-center">
              <Text className="font-bold text-gray-600 text-lg">
                {followers}
              </Text>
              <Text className="font-medium text-sm  text-gray-500">
                Followers
              </Text>
            </View>
            <View className="items-center">
              <Text className="font-bold text-gray-600 text-lg">
                {followers}
              </Text>
              <Text className="font-medium text-sm text-gray-500">Likes</Text>
            </View>
            <View className="items-center">
              <Text className="font-bold text-gray-600 text-lg">
                {subscribers}
              </Text>
              <Text className="font-medium text-sm text-gray-500">
                Subscribers
              </Text>
            </View>
          </View>
          <Bottoms />
          <View className="flex-row mt-10 ml-4 mr-4 justify-evenly space-x-4">
            <TouchableOpacity
              onPress={handlePress}
              className={`${
                press ? "bg-gray-200 py-1 px-3 rounded-xl " : ""
              } flex-row items-center`}
            >
              <SquaresPlusIcon color="#687980" size={22} />
              <Text className="font-semibold text-gray-600 text-base">
                Post
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center">
              <LockClosedIcon color="#687980" size={22} />
              <Text className="font-semibold text-gray-600 text-base">
                Private
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <FilmIcon color="#687980" size={22} />
              <Text className="font-semibold text-gray-600 text-base">
                Reels
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center">
              <HeartIcon color="#687980" size={22} />
              <Text className="font-semibold text-gray-600 text-base">
                Likes
              </Text>
            </TouchableOpacity>
          </View>
          <PostContent />
        </View>
      </ScrollView>
      {/* <BottomTab /> */}
    </SafeAreaView>
  );
};

export default UserProfileScreen;
