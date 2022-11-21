import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const StatusScreen = ({ route, navigation }) => {
  const { name, image } = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>{name} StatusScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default StatusScreen;
