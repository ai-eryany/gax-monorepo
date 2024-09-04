// Packages
import * as R from 'ramda';

// Types
import { Maybe } from '@gax/types';

function set(key: Maybe<string>, item: Maybe<any>) {
  if (R.isNil(key)) return;
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return item;
  } catch (e) {
    console.log(e);
  }
}

function get(key: Maybe<string>) {
  if (R.isNil(key)) return;
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return;
  }
}

function init(key: Maybe<string> = undefined, item: Maybe<any>) {
  if (R.isNil(key)) set('model', {});
  try {
    if (!get(key)) set(key, item);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}

const Storage = {
  set,
  get,
  init,
};

export default Storage;
