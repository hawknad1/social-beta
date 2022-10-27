import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import BottomTab from "./components/BottomTab";
import NotificationScreen from "./screens/NotificationScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
