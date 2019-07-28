import React from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { MainScreen, ShowScreen, SearchScreen } from "./src/screens";
import { Footer } from "./src/components";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 11 }}>
        <AppContainer />
      </View>
      <Footer />
    </View>
  );
};

export default App;

const AppStackNagigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    ShowScreen: { screen: ShowScreen },
    SearchScreen: { screen: SearchScreen }
  },
  { headerLayoutPreset: "center" }
);

const AppContainer = createAppContainer(AppStackNagigator);
