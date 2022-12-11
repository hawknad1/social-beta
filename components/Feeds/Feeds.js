import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeedProfile from "./FeedProfile";
import FeedContent from "./FeedContent";
import { Divider } from "@rneui/themed";
import FeedComments from "./FeedComments";
import Caption from "./Caption";

const Feeds = ({ post }) => {
  return (
    <View className="">
      {/* <Divider width={0.2} /> */}

      <FeedProfile post={post} />
      <FeedContent post={post} />
      <Caption post={post} />
      <FeedComments post={post} />
    </View>
  );
};

export default Feeds;
