import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/Home';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
