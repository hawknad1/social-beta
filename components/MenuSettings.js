import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import {
  Cog6ToothIcon,
  QrCodeIcon,
  ArchiveBoxArrowDownIcon,
  BookmarkIcon,
  GlobeEuropeAfricaIcon,
  SparklesIcon,
  UserGroupIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const MenuSettings = () => {
  const navigation = useNavigation();
  return (
    <View className="">
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        className="flex-row  p-3 items-center space-x-2"
      >
        <Cog6ToothIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">Settings</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3 items-center space-x-2">
        <ArchiveBoxArrowDownIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">Archive</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3  items-center space-x-2">
        <SparklesIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">Your Activity</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3  items-center space-x-2">
        <QrCodeIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">QR Code</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3  items-center space-x-2">
        <BookmarkIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">Saved</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3  items-center space-x-2">
        <UserGroupIcon color="gray" size={30} />
        <Text className="text-lg text-gray-700 font-medium">Close friends</Text>
      </TouchableOpacity>
      <Divider
        style={{ width: "90%", marginRight: "auto", marginLeft: "auto" }}
        color="#EAEAEA"
      />
      <TouchableOpacity className="flex-row p-3 items-center space-x-2">
        <GlobeEuropeAfricaIcon color="gray" size={25} />
        <Text className="text-lg font-medium text-gray-600">
          COVID-19 Information Center
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuSettings;
