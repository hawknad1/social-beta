import { View, Text, ScrollView } from "react-native";
import React from "react";
import Stories from "../Stories/Stories";
import FeedProfile from "./FeedProfile";
import FeedContent from "./FeedContent";
import { Divider } from "@rneui/themed";

// { fullname, image }
const Feeds = ({
  caption,
  imageUrl,
  profilePic,
  user,
  share,
  likes,
  subscribers,
  followers,
  description,
}) => {
  return (
    <View className="">
      <Divider width={0.2} />
      {/* fullname={fullname} image={image} */}

      <FeedProfile
        profilePic={profilePic}
        user={user}
        subscribers={subscribers}
        followers={followers}
        description={description}
      />
      <FeedContent
        caption={caption}
        imageUrl={imageUrl}
        share={share}
        likes={likes}
      />

      {/* <FeedContent
        image={require("../../images/2.jpg")}
        caption="Hello,I am having fun!"
        likes="42.1k"
        comments={521}
        share={36}
      /> */}
    </View>
  );
};

export default Feeds;
