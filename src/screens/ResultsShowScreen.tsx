import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from 'react-native';
import {
  NavigationContainerProps,
  NavigationScreenProp,
  NavigationParams,
} from 'react-navigation';
import yelp from '../api/yelp';

interface Props extends NavigationContainerProps {
  navigation: NavigationScreenProp<{}, NavigationParams>;
}

const ResultsShowScreen: React.FC<Props> = (props) => {
  const [result, setResult] = useState({ name: '', photos: [], photo: '' });
  const { navigation } = props;
  const id = navigation.getParam('id');

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return result.photos.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> {result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
