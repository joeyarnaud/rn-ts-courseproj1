import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import yelp from '../api/yelp';

interface useResults {
  (): Array<any>;
}

const useResults: useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string) => {
    try {
      const response: AxiosResponse = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'melbourne',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;
