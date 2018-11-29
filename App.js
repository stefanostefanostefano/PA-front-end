import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import * as api from "./api/api";
import Spinner from "./components/Spinner";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInScreen from "./components/SignInScreen";
import OtherScreen from "./components/OtherScreen";
import AuthLoadingScreen from "./components/AuthLoading";
import HomeBar from "./components/NavBar";
import Form from "./components/Form";

const AppStack = createStackNavigator({
  Home: {
    screen: HomeBar,
    navigationOptions: {
      header: null
    }
  },
  Other: OtherScreen,
  Spinner: Spinner
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Form: Form
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
