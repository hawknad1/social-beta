import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "../components/BottomTab";
import WelcomeScreen from "../screens/WelcomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import CreatePost from "../screens/CreatePost";
import useAuth from "../hooks/useAuth";
import UserProfileScreen from "../screens/UserProfileScreen";
import StatusScreen from "../screens/StatusScreen";
import PopUp from "../components/BottomSheets/PopUp";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={BottomTab}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={BottomTab} />

      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />

      <Stack.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen
        name="CreatePost"
        options={{ headerShown: true }}
        component={CreatePost}
      />

      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="Status" component={StatusScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
