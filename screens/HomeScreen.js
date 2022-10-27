import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import StoryRows from "../components/Stories/StoryRows";
import Feeds from "../components/Feeds/Feeds";
import { useNavigation } from "@react-navigation/native";
import { ExclamationCircleIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="m-4">
          <View className="flex-row justify-between">
            <TouchableOpacity>
              <Bars3Icon size={30} color="gray" />
            </TouchableOpacity>

            <View className="flex-row space-x-4">
              <TouchableOpacity>
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
        <StoryRows />
        <Feeds image={require("../images/5.jpg")} fullname="Dankwah Thomas" />
        <Feeds image={require("../images/2.jpg")} fullname="Joan Hans" />
        <Feeds image={require("../images/1.jpg")} fullname="Megan Good" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
