import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
