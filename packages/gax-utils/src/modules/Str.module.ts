// Types
import { Maybe } from '@gax/types';

function ingfy(obj: any): Maybe<string> {
    return JSON.stringify(obj);
}

function join(ch: string = ' ', ...args: string[]): Maybe<string> {
    if (!args?.length) return '';
    return args.join(ch);
}

const Str = {
    ingfy,
    join,
};

export { Str };
