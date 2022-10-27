import { View, Text, ScrollView } from "react-native";
import React from "react";
import Followers from "./Followers";
import Tip from "./Tip";
import Comment from "./Comment";
import Subscribed from "./Subscribed";

const Notification = () => {
  return (
    <View className="">
      <Followers />
      <Tip />
      <Comment />
      <Subscribed />
    </View>
  );
};

export default Notification;
