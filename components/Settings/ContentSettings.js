import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  BellAlertIcon,
  VideoCameraIcon,
  MoonIcon,
  LanguageIcon,
  CursorArrowRippleIcon,
} from "react-native-heroicons/outline";

const ContentSettings = () => {
  return (
    <View className="bg-white">
      <View className="mt-2 ml-4 mr-4">
        <Text className="font-medium text-base text-gray-500">
          CONTENT & ACTIVITY
        </Text>
        <View className="m-2">
          <TouchableOpacity className="flex-row mt-4 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <BellAlertIcon color="black" size={22} />
              <Text className="text-base text-gray-600">
                Push notifications
              </Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <VideoCameraIcon color="black" size={22} />
              <Text className="text-base text-gray-600">LIVE Subscription</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <LanguageIcon color="black" size={22} />
              <Text className="text-base text-gray-600">App language</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <MoonIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Dark mode</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <CursorArrowRippleIcon color="black" size={22} />
              <Text className="text-base text-gray-600">
                Content preference
              </Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="border-b border-gray-100 mt-4" />
    </View>
  );
};

export default ContentSettings;
