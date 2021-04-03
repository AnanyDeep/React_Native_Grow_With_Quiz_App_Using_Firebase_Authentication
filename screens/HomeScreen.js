import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { auth } from "./Firebase";
import firebase from "firebase";

export default function HomeScreen({ navigation }) {
  const signOutUser = () => {
    const auth = firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "skyblue",
      }}
    >
      <Text>Home Screen </Text>
      <Button title="SignOut" onPress={signOutUser} />
    </View>
  );
}

const styles = StyleSheet.create({});
