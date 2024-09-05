type Maybe<T> = NonNullable<T> | undefined | null;
type SafePick<T, K extends keyof NonNullable<T>> = NonNullable<T>[K];
type SafePickObj<T, K extends keyof NonNullable<T>> = Pick<NonNullable<T>, K>;

type FuncConfig<ArgsType, ReturnValue> = (args?: ArgsType) => ReturnValue;

type Mode = 'dev' | 'prod';

type MessageTypes = 'PASS' | 'INFO' | 'WARN' | 'FAIL';

type MessageArgs = {
  mode?: Maybe<Mode>;
  type?: Maybe<MessageTypes>;
  message?: Maybe<string>;
};

type CustomStrings = {
  [key: string]: Maybe<string>;
};

export {
  Maybe,
  SafePick,
  SafePickObj,
  CustomStrings,
  FuncConfig,
  Mode,
  MessageTypes,
  MessageArgs,
};
