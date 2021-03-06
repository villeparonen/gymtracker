// import libraries for making a component

import React from "react";
import { Text, View, StyleSheet, Platform, Button } from "react-native";

// make a component
const Header = props => {
  const { headerViewStyle, headerTextStyle, headerContainer } = styles;

  return (
    <View style={headerContainer}>
      <View style={headerViewStyle}>
        <Text style={headerTextStyle}>{props.headerName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center"
  },
  headerViewStyle: {
    height: 100,
    width: 600,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "green",
    margin: 5,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 20 },
    shadowOpacity: 1,
    position: "relative",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2
      },
      android: {
        elevation: 10
      }
    })
  },
  headerTextStyle: {
    fontSize: 24,
    color: "white",
    textAlign: "center"
  }
});

export default Header;
