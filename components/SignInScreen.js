import React from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  TextInput
} from "react-native";
import { googleApi } from "../api/googleApi";
import { WebBrowser, AuthSession } from "expo";

class SignInScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = {
    title: "sign in"
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput title="username" placeholder="username" />
        <TextInput
          title="password"
          placeholder="password"
          secureTextEntry={true}
        />
        <Button title="Sign in!" onPress={this.googleSignIn} />
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Form");
  };

  googleSignIn = async () => {
    try {
      const token = await googleApi.loginSync();
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };

  linkTo = () => {
    WebBrowser.openBrowserAsync("https://projectpa-223310.firebaseapp.com/");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignInScreen;
