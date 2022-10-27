import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 items-center">
      <Image
        source={require("../images/welcome.jpg")}
        className="h-96 w-[390px] mt-24"
      />
      <Text className="font-bold text-3xl text-gray-600">Hey! Welcome</Text>
      <Text className="text-gray-500 text-base text-center w-96 mt-2">
        We deliver on-demand organic fresh fruits directly from nearby farms.
      </Text>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          className="bg-yellow-200 p-4 px-4 mt-10 rounded-lg w-80"
        >
          <Text className="px-2 text-center font-medium text-lg">
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text className="mt-6 text-base text-center font-medium text-gray-600">
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
