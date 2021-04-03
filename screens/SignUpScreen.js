import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import firebase from "firebase";
import { auth } from "../screens/Firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const Register = () => {
    const auth = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          //   displayName: fullName,
          //   photoURL:
          //     imageURL ||
          //     "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <KeyboardAvoidingView>
          <TextInput
            style={styles.txtInput}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            autoFocus={true}
          />
          <TextInput
            style={styles.txtInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            onSubmitEditing={Register}
          />
        </KeyboardAvoidingView>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Register}>
            <Text style={styles.btnText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  secondContainer: {
    backgroundColor: "skyblue",
    height: "90%",
    width: "90%",
    elevation: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  txtInput: {
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 20,
    color: "skyblue",
  },
  logo: {
    height: 200,
    width: 200,
    // marginBottom: 20,
  },
  btn: {
    flexDirection: "row",
  },
  btnText: {
    marginRight: 30,
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    color: "#FFF",
  },
});
