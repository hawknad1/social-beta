import { View, Text, ScrollView } from "react-native";
import React from "react";
import Stories from "../Stories/Stories";
import FeedProfile from "./FeedProfile";
import FeedContent from "./FeedContent";

const Feeds = ({ fullname, image }) => {
  return (
    <View className="">
      <FeedProfile fullname={fullname} image={image} />
      <FeedContent
        image={require("../../images/2.jpg")}
        caption="Hello,I am having fun!"
        likes="42.1k"
        comments={521}
        share={36}
      />
    </View>
  );
};

export default Feeds;
