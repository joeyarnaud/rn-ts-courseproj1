import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {
  NavigationContainerProps,
  NavigationScreenProp,
  NavigationParams,
} from 'react-navigation';

interface Props extends NavigationContainerProps {
  navigation: NavigationScreenProp<{}, NavigationParams>;
}

const ResultsShowScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  console.log(id);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> ResultsShowScreen </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ResultsShowScreen;
