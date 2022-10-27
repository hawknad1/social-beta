import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { HomeIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { PlusCircleIcon } from "react-native-heroicons/solid";

const Menu = () => {
  return (
    <SafeAreaView className="">
      <View className="flex-row mb-10">
        <TouchableOpacity className="">
          <HomeIcon size={30} />
        </TouchableOpacity>
        <TouchableOpacity className>
          <MagnifyingGlassIcon size={30} />
        </TouchableOpacity>
        <TouchableOpacity className>
          <PlusCircleIcon size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
