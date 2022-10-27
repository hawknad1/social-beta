import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  UserIcon,
  ChevronRightIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ShareIcon,
  QrCodeIcon,
} from "react-native-heroicons/outline";

const AccountSettings = () => {
  return (
    <View className="bg-white">
      <View className="m-4">
        <Text className="font-medium text-base text-gray-500">ACCOUNT</Text>
        <View className="m-2">
          <TouchableOpacity className="flex-row mt-4 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <UserIcon color="black" size={22} />

              <Text className="text-base text-gray-600">Manage account</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <LockClosedIcon color="black" size={22} />

              <Text className="text-base text-gray-600">Privacy</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <ShieldCheckIcon color="black" size={22} />
              <Text className="text-base text-gray-600">
                Security and login
              </Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <CreditCardIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Balance</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <QrCodeIcon color="black" size={22} />
              <Text className="text-base text-gray-600">QR code</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row  mt-6 items-center space-x-2 justify-between">
            <View className="flex-row items-center space-x-2">
              <ShareIcon color="black" size={22} />
              <Text className="text-base text-gray-600">Share</Text>
            </View>
            <View>
              <ChevronRightIcon color="#B2B2B2" size={22} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="border-b border-gray-100 mb-4" />
    </View>
  );
};

export default AccountSettings;
