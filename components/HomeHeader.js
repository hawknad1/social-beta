import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ExclamationCircleIcon } from "react-native-heroicons/solid";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { useState } from "react";
import MenuSettings from "./MenuSettings";
import SearchScreen from "../screens/SearchScreen";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userBottomSheet = useRef(null);
  const navigation = useNavigation();

  const handlePopUp = () => {
    userBottomSheet.current?.present();
    setIsOpen(true);
  };

  return (
    <View>
      <View className="m-4">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handlePopUp}>
            <Bars3Icon size={30} color="gray" />
          </TouchableOpacity>

          <View className="flex-row space-x-4">
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MagnifyingGlassIcon size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <BellIcon size={30} color="gray" />
              <View className="absolute left-3 bottom-4">
                <ExclamationCircleIcon color="#EB1D36" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-4">
          <Text className="font-semibold text-lg">Top Stories</Text>
        </View>
      </View>
      <BottomSheetModal
        ref={userBottomSheet}
        snapPoints={["55%"]}
        backgroundStyle={{ borderRadius: 15 }}
      >
        <View className="m-4">
          <MenuSettings />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default HomeHeader;
