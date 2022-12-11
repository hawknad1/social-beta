import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { POSTS } from "../components/data/postData";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["35%"];

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

  function handleModalPopUp() {
    bottomSheetModalRef.current?.present();
  }

  const logout = () => {
    signOut(auth).catch((err) => setError(err));
  };

  const login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("login successfull"))
        .catch((err) => alert("Invalid email and password!", err.message));
    }
  };

  const register = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(
          (authUser) => {}
          // authUser.user?.displayName?.updateProfile(auth.currentUser, {
          //   displayName: name,
          // });
          // authUser.user.updateProfile(auth.currentUser, {
          //   displayName: name,
          // });

          // authUser.user.displayName(name)
          // console.log("Signup success")
        )
        .catch((err) => alert(err.message));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        login,
        user,
        setUser,
        logout,
        name,
        register,
        bottomSheetModalRef,
        snapPoints,
        handleModalPopUp,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
