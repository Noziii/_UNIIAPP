import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CampusEvents from "./CampusEvents";
import Res from "./Res";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CampusEvents" component={CampusEvents} />
      <Stack.Screen name="Res" component={Res} />
    </Stack.Navigator>
  );
};

export default App;
