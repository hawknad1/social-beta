import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import Notification from "../components/NotificationSlides/Notification";

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="m-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity onPress={navigation.goBack}>
              <ArrowLeftIcon size={30} color="gray" />
            </TouchableOpacity>
            <Text className="font-semibold text-3xl text-gray-600">
              Notifications
            </Text>
          </View>
        </View>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
