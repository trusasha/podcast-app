import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={S.flex}>
      <Text children={'HOME'} />
    </SafeAreaView>
  );
};

const S = StyleSheet.create({
  flex: { flex: 1 },
});

export default Home;
