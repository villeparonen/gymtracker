import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import MainTabNavigator from "./MainTabNavigator";

// const { LogOutButton } = styles;

export default withAuthenticator(
  createAppContainer(
    createSwitchNavigator({
      // Authentication works with withAuthenticator but also..
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator
    })
  )
);