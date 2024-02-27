// packages
import axios from 'axios';
import * as R from 'ramda';

// config
import { config } from 'config';

// interfaces
import { RequestParams } from '@interfaces/utils';
////////////////////////////////////////////////////////////////////
const api = axios.create({ baseURL: config.api, timeout: 2000 });

export default async function fetcher(args: RequestParams) {
  const { url, method, data, isRequesting } = args;

  if (R.isNil(url)) {
    console.warn('URL not provided in the request object');
    return;
  } else if (R.not(isRequesting)) return;
  try {
    const res = await api.request({ url, method, data });
    return res;
  } catch (e) {
    console.error(e);
  }
}
