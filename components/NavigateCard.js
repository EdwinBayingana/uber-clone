import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-red-500 flex-1`}>
      <Text>Yoo</Text>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
