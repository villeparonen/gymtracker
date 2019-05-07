import React from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { SignIn } from "aws-amplify-react-native";

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent(theme) {
    return (
      <View>
       </View>
    );
  }
}
