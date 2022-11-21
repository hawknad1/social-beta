import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={SignUpScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
