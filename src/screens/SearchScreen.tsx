import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainerProps } from 'react-navigation';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

interface Props extends NavigationContainerProps {}

interface FilterResultsByPrice {
  (price: string): Array<Object>;
}

const SearchScreen: React.FC<Props> = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice: FilterResultsByPrice = (price: string) => {
    return results.filter((result: any) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
        <ResultsList
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
