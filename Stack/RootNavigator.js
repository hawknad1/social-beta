import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import StackNavigator from "./StackNavigator";
import AuthStack from "./AuthStack";
import useAuth from "../hooks/useAuth";

function RootNavigator() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
      }),
    []
  );

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
  //     authUser ? setUser(authUser) : setUser(null);
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, [user]);
  // if (loading) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return <>{user ? <StackNavigator /> : <AuthStack />}</>;
}

export default RootNavigator;
