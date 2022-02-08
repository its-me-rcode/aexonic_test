/* eslint-disable prefer-template */
import axios from 'axios';

import { useQuery } from 'react-query';

export default function useGetData() {
  return useQuery(
    'userDetails',
    async () => {
      const { data } = await axios.get(
        'https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7'
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}
