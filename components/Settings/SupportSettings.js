import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  UserIcon,
  ChevronRightIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  ShieldExclamationIcon,
} from "react-native-heroicons/outline";

const SupportSettings = () => {
  return (
    <View className="bg-white">
      <View className="mt-4 ml-4 mr-4">
        <Text className="font-medium text-base text-gray-500">SUPPORT</Text>
        <View className="m-2">
          <TouchableOpacity className="flex-row mt-4 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <PencilIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Report a problem</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <QuestionMarkCircleIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Help center</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <ShieldCheckIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Safety center</Text>
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

export default SupportSettings;
