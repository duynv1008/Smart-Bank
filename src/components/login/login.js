import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Actions } from "react-native-router-flux";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

onSignIn = () => {
  Actions.Main();
};

const Login = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Image
          source={require("../../images/header.png")}
          resizeMode="stretch"
          style={styles.headerImage}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.headerText]}>Smart <Text style={{color:'#F39C53'}}>Bank</Text></Text>
        </View>
      </View>
      <View style={[styles.content]}>
        <View style={[styles.viewInput]}>
          <Icon name="user" style={[styles.inputIcon]} />
          <TextInput style={[styles.input]} placeholder="User name" />
        </View>
        <View style={[styles.viewInput]}>
          <Icon name="lock" style={[styles.inputIcon]} />
          <TextInput style={[styles.input]} placeholder="Password" />
        </View>
        <View style={[styles.fingerprint]}>
          <Image
            source={require("../../images/fingerprint.png")}
            resizeMode="stretch"
            style={styles.fingerprintImg}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity
            style={[styles.btnSignIn]}
            onPress={() => onSignIn()}
          >
            <Text style={{ color: "white" }}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={{ color: "#1B76EB", textAlign: "center", opacity: 0.5,paddingTop:10,paddingBottom:10 }}>
            Forgot your password
          </Text>
          <View style={{borderWidth:3,marginLeft:100,marginRight:100,borderColor:'gray',borderRadius:5}}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1
  },
  header: {
    height: height / 4,
    position: "relative",
    justifyContent: "center"
  },
  headerImage: {
    height: height / 4,
    position: "absolute"
  },
  headerText: { fontSize: 20, color: "white" },

  content: {
    height: height - height / 4,
    padding: 20,
    paddingTop: 50,
    flex: 1
  },
  input: {
    width: width - 70,
    backgroundColor: "white",
    position: "relative",
    height: 50,
    borderRadius: 10,
    textAlign: "center"
  },
  viewInput: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5
  },
  inputIcon: { fontSize: 25, color: "gray" },
  fingerprint: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  },
  btnSignIn: {
    height: 50,
    backgroundColor: "#1B76EB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  footer: {
    justifyContent: "flex-end",
    padding:20,
  }
});

export default Login;
