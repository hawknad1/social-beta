import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  LockClosedIcon,
  XMarkIcon,
  EnvelopeIcon,
} from "react-native-heroicons/outline";
import Socials from "../components/Socials";
import "expo-dev-client";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../hooks/useAuth";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       navigation.replace("Home");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // const login = () => {
  //   if (email !== "" && password !== "") {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then(() => console.log("login successfull"))
  //       .catch((err) => alert("Invalid email and password!", err.message));
  //   }
  // };

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-3 right-5"
      >
        <XMarkIcon size={28} color="gray" />
      </TouchableOpacity>

      {/* greetings */}
      <View className="mt-24 items-center">
        <Text className="font-bold text-3xl pb-3">Hello Again!</Text>
        <Text className="text-xl w-48 items-center text-gray-600 text-center">
          Welcome back you've been missed!
        </Text>
      </View>

      {/* Inputs */}
      <View className="items-center m-4">
        <View className="flex-row items-center space-x-1 p-3 w-[350px] border border-slate-300 rounded-lg">
          <EnvelopeIcon color="gray" size={25} />
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="text-lg leading-5 p-3 w-11/12"
            keyboardType="default"
          />
        </View>

        <View className="flex-row items-center space-x-1 p-3 w-[350px] border border-slate-300 rounded-lg mt-4">
          <LockClosedIcon color="gray" size={25} />
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="text-lg leading-5 p-3 w-11/12"
            keyboardType="default"
            secureTextEntry
          />
        </View>
      </View>

      <View className="w-11/12">
        <TouchableOpacity className=" items-end">
          <Text className="text-sm text-blue-400">Forgot Passowrd?</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center">
        <TouchableOpacity
          onPress={login}
          className="bg-red-400 w-10/12 rounded-xl mt-8"
        >
          <Text className="text-xl text-center p-4 text-white font-medium">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <View className="items-center m-6">
        <View className="flex-row items-center">
          <View className="border-b border-gray-400 w-24" />
          <Text className="py-4 px-2 m-2">Or continue with</Text>
          <View className="border-b border-gray-400 w-24" />
        </View>

        <Socials />

        <View className="flex-row space-x-1 m-8 items-center">
          <Text className="text-gray-500 text-base font-medium">
            Not a member?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-base font-medium text-blue-500">
              Register now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
