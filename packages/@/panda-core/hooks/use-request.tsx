// Packages
import useSWR from 'swr';
import * as R from 'ramda';

// Types
import { RequestParams } from '@interfaces/utils';

export default function useRequest(props: RequestParams) {
  const { url, params, method, data } = props;
  if (R.isNil(url) || R.isEmpty(url))
    throw new Error('baseURL can not be empty');
  const key = params ? url + '/' + params : url;
  return useSWR({ url: key, method, data });
}
