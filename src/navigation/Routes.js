import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Screen from '../pages/Screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
      />

      <Stack.Screen 
        name="Screen"
        component={Screen}
      />
    </Stack.Navigator>
  );
}
export default Routes;