import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface Props {
  result: any;
}

const ResultDetail: React.FC<Props> = ({ result }) => (
  <View style={styles.container}>
    <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
    <Text style={styles.nameStyle}>{result.name}</Text>
    <Text>
      {result.rating} Stars, {result.review_count}
    </Text>
  </View>
);

ResultDetail.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ResultDetail;
