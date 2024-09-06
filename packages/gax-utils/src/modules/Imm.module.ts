// Types
import { Maybe } from '@gax/types';

type CopyArgs = Maybe<any>;

type MergeArgs = Maybe<{
  obj1: Maybe<any>;
  obj2: Maybe<any>;
}>;

type InsertToArrArgs = Maybe<{
  arr: Maybe<any[]>;
  ele: Maybe<any>;
}>;

type MergeArrArgs = Maybe<{
  arr1: Maybe<any[]>;
  arr2: Maybe<any[]>;
}>;

function copy(obj: CopyArgs): Maybe<any> {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}

function merge(args: MergeArgs): Maybe<any> {
  if (!args) return {};
  return { ...copy(args.obj1), ...copy(args.obj2) };
}

function insertToArr(args: InsertToArrArgs): Maybe<any[]> {
  if (!args) return [];
  return [...copy(args.arr), copy(args.ele)];
}

function mergeArr(args: MergeArrArgs): Maybe<any[]> {
  if (!args) return [];
  return [...copy(args.arr1), ...copy(args.arr2)];
}

const Imm = {
  copy,
  merge,
  insertToArr,
  mergeArr,
};

export { Imm };
