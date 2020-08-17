import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationParams,
  withNavigation,
} from 'react-navigation';
import ResultsDetail from './ResultDetail';

interface Props {
  title: string;
  results: Array<Object>;
  navigation: any;
}

const ResultsList: React.FC<Props> = (props) => {
  const { title, results, navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result: any) => result.id}
        renderItem={(result: any) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: result.item.id })
              }
            >
              <ResultsDetail result={result.item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

ResultsList.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
