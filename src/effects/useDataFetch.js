import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { url } from '../constants';
import { GradientsContext } from '../context';

const useDataFetch = () => {
  const [data, setData] = useState();
  const { setIsLoading } = useContext(GradientsContext);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setInterval(() => setIsLoading(false), 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export { useDataFetch };
