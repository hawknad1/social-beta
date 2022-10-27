import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../config/firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({ displayName: name });
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding">
      <SafeAreaView className="m-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mt-4 mb-6 ">
            <TouchableOpacity
              className="absolute bg-blue-100 p-1 rounded-full"
              onPress={navigation.goBack}
            >
              <ArrowLeftIcon size={25} />
            </TouchableOpacity>
          </View>

          <View className="mt-10">
            <Text className="text-4xl font-bold">Create{"\n"}Account</Text>
          </View>

          {/* Inputs */}
          <View>
            <View className="mt-6">
              <View className="flex-row items-center space-x-2 mt-2 py-2">
                <UserIcon size={23} color="gray" />
                <TextInput
                  placeholder="Full name"
                  autoFocus
                  value={name}
                  onChangeText={(text) => setName(text)}
                  keyboardType="default"
                  className="text-lg py-2 leading-5 w-11/12 border-b border-gray-300"
                />
              </View>
            </View>
            <View className="mt-6">
              <View className="flex-row items-center space-x-2 mt-2 py-2">
                <EnvelopeIcon size={23} color="gray" />
                <TextInput
                  placeholder="Enter email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  className="text-lg py-2 leading-5 w-11/12 border-b border-gray-300"
                />
              </View>
            </View>
            <View className="mt-6">
              <View className="flex-row items-center space-x-2 mt-2 py-2">
                <LockClosedIcon size={23} color="gray" />
                <TextInput
                  placeholder="Enter password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  keyboardType="default"
                  className="text-lg py-2 leading-5 w-11/12 border-b border-gray-300"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View className="mt-6">
              <View className="flex-row items-center space-x-2 mt-2 py-2">
                <PhoneIcon size={23} color="gray" />
                <TextInput
                  placeholder="Enter mobile"
                  keyboardType="phone-pad"
                  className="text-lg py-2 leading-5 w-11/12 border-b border-gray-300"
                />
              </View>
            </View>
          </View>
          <View className="flex-row">
            <Text className="text-base">I agree to the </Text>
            <TouchableOpacity>
              <Text className="text-base text-blue-600">
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text className="text-base"> and </Text>
            <TouchableOpacity className="">
              <Text className="text-base text-blue-600">Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.container}>
              <Button
                onPress={register}
                title="Create account"
                buttonStyle={{
                  borderColor: "transparent",
                  borderWidth: 0,
                  backgroundColor: "#2192FF",
                  borderRadius: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}
                containerStyle={{
                  width: 350,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 21 }}
              />
            </View>

            <View className="flex-row items-center justify-center">
              <View className="border-b border-gray-400 w-24" />
              <Text className="py-4 px-2 text-base">Or Sign up with</Text>
              <View className="border-b border-gray-400 w-24" />
            </View>

            <TouchableOpacity className="flex-row items-center justify-center space-x-3 p-3 mt-3 border border-gray-400 rounded-lg">
              <Image
                source={require("../images/goog.png")}
                className="h-10 w-10"
              />
              <Text className="text-base font-medium">Sign up with Google</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center space-x-1 m-8 items-center">
              <Text className="text-gray-500 text-base font-medium">
                Already a member?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text className="text-base font-medium text-blue-500">
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 350,
  },
});
