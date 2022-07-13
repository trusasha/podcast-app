import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import MainStack from 'navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <View style={S.flex}>
        <MainStack />
      </View>
    </NavigationContainer>
  );
};

const S = StyleSheet.create({
  flex: { flex: 1 },
});

export default App;
