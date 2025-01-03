// In index.tsx
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../src/Login"
import Dashboard from "../../src/Dashboard"
import Detail from "../../src/Detail"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}