import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState();

  const searchData = () => {};

  return (
    <SafeAreaView>
      <View className="flex-row items-center space-x-2 mr-2">
        <TouchableOpacity onPress={navigation.goBack} className="">
          <ChevronLeftIcon color="#1A132F" size={28} />
        </TouchableOpacity>
        <View className="flex-row flex-1 items-center bg-gray-200 h-10 rounded-3xl px-3 space-x-2">
          <MagnifyingGlassIcon size={20} color="gray" className="" />
          <TextInput
            keyboardType="default"
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search"
            className="text-base py-2 leading-5 w-64"
          />
        </View>
        <TouchableOpacity onPress={searchData}>
          <Text className="">Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
