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
import AddBottom from "../components/AddBottom";
import PopUpModal from "../components/BottomSheets/PopUpModal";
import useAuth from "../hooks/useAuth";
import { POSTS } from "../components/data/postData";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { bottomSheetModalRef, snapPoints, handleModalPopUp } = useAuth();

  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {POSTS.map(
          (
            {
              caption,
              imageUrl,
              profilePic,
              user,
              likes,
              subscribers,
              followers,
              description,
            },
            index
          ) => (
            <Feeds
              key={index}
              caption={caption}
              imageUrl={imageUrl}
              profilePic={profilePic}
              user={user}
              likes={likes}
              subscribers={subscribers}
              followers={followers}
              description={description}
            />
          )
        )}
        {/* <Feeds image={require("../images/2.jpg")} fullname="Joan Hans" />
        <Feeds image={require("../images/1.jpg")} fullname="Megan Good" /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
