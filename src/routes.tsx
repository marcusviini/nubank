import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Dashboard from "./pages/Dashboard";


const { Screen } = createBottomTabNavigator();


const Routes: React.FC = () => (
  <NavigationContainer>
       <Screen
        name="Meus Treinos"
        component={Dashboard}
      />
  </NavigationContainer>
);

export default Routes;
