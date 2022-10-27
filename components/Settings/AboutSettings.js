import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  QrCodeIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";

const AboutSettings = () => {
  return (
    <View className="bg-white">
      <View className="m-4">
        <Text className="font-medium text-base text-gray-500">ABOUT</Text>
        <View className="m-2">
          <TouchableOpacity className="flex-row mt-4 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <UserGroupIcon color="black" size={22} />
              <Text className="text-base text-gray-600">
                Community Guidelines
              </Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <DocumentDuplicateIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Terms of Service</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <DocumentCheckIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Privacy Policy</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <QrCodeIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Copyright Policy</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="border-b border-gray-100" />
    </View>
  );
};

export default AboutSettings;
