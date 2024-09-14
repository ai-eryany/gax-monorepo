export type Maybe<T> = NonNullable<T> | undefined | null;
export type SafePick<T, K extends keyof NonNullable<T>> = NonNullable<T>[K];
export type SafePickObj<T, K extends keyof NonNullable<T>> = Pick<
    NonNullable<T>,
    K
>;

export type FuncConfig<ArgsType, ReturnValue> = (
    args?: ArgsType
) => ReturnValue;

export type Mode = 'dev' | 'prod';

export type MessageTypes = 'PASS' | 'INFO' | 'WARN' | 'FAIL';

export type SocialMedias =
    | 'Instagram'
    | 'LinkedIn'
    | 'Github'
    | 'Facebook'
    | 'Email';

export type MessageArgs = {
    mode?: Maybe<Mode>;
    type?: Maybe<MessageTypes>;
    message?: Maybe<string>;
};

export type CustomStrings = {
    [key: string]: Maybe<string>;
};
