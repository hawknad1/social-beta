import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";
import {
  HomeIcon,
  EnvelopeIcon,
  UserIcon,
  Cog8ToothIcon,
  PlusIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/outline";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePost from "../screens/CreatePost";
import AddBottom from "./AddBottom";
import PopUp from "../components/BottomSheets/PopUp";
import { TouchableOpacity } from "react-native";
import EarningScreen from "../screens/EarningScreen";
import PopUpModal from "./BottomSheets/PopUpModal";
import UserProfileScreen from "../screens/UserProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      className="p-4"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarBadge: 12,
          tabBarIcon: ({ color, size }) => (
            <EnvelopeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings1"
        component={EarningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CurrencyDollarIcon color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="add"
        component={AddBottom}
        options={{
          tabBarIcon: () => <AddBottom />,
        }}
      />

      <Tab.Screen
        name="Earnings"
        component={EarningScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CurrencyDollarIcon color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Settings and Privacy"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Cog8ToothIcon color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
