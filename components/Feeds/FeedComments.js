import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FeedComments = ({ post }) => {
  return (
    <View>
      <TouchableOpacity>
        <View className="ml-4 w-96 mt-1">
          {!!post.comments.length && (
            <Text className="text-gray-400">
              View {post.comments.length > 1 ? "all" : ""}
              {post.comments.length} {""}
              {post.comments.length > 1 ? "comments" : "comment"}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {post.comments.map((comment, index) => (
        <View key={index} className="ml-4 w-96 mt-1 flex-row items-center">
          <Text>
            <Text className="font-semibold text-[16px]">
              {comment.userHandle} {""}
            </Text>
            <Text>{comment.comment}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default FeedComments;

// className="flex-row items-center space-x-2 ml-4"
