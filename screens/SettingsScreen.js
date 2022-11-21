import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import AccountSettings from "../components/Settings/AccountSettings";
import ContentSettings from "../components/Settings/ContentSettings";
import SupportSettings from "../components/Settings/SupportSettings";
import AboutSettings from "../components/Settings/AboutSettings";
import { ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline";
import useAuth from "../hooks/useAuth";

const SettingsScreen = () => {
  const { logout } = useAuth();

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <AccountSettings />
      <ContentSettings />
      <SupportSettings />
      <AboutSettings />
      <View className="m-4">
        <TouchableOpacity onPress={logout} className="flex-row space-x-2">
          <ArrowLeftOnRectangleIcon color="black" />
          <Text className="text-base font-semibold text-gray-500">LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
