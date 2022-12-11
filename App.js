import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./hooks/useAuth";
import RootNavigator from "./Stack/RootNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function App() {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider className="bg-gray-200">
        <AuthProvider>
          <StatusBar style="auto" />
          <RootNavigator />
        </AuthProvider>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
