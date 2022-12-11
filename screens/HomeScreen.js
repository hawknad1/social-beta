import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import StoryRows from "../components/Stories/StoryRows";
import Feeds from "../components/Feeds/Feeds";
import { POSTS } from "../components/data/postData";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <StoryRows />
        {POSTS.map((post, index) => (
          <Feeds post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
