// Handle Errors by wrapping everything and send messages.
// TODO: install winston and use it inside the message function
// Packages
import { equals, isNil } from 'ramda';

// Types
import { MessageArgs, FuncConfig } from '@gax/types';
import { Maybe } from '@gax/types';

// TODO: Set a global switch to turn off all messages.
function message(ms: MessageArgs) {
  if (isNil(ms)) {
    console.log(`[FAIL]`);
    return;
  }
  if (equals(ms.mode, 'PROD')) return;
  switch (ms.type) {
    case 'PASS':
      console.log(`[PASS] ${ms.message}`);
      break;
    case 'INFO':
      console.log(`[INFO] ${ms.message}`);
      break;
    case 'WARN':
      console.warn(`[WARN] ${ms.message}`);
      break;
    case 'FAIL':
      console.error(`[FAIL] ${ms.message}`);
      break;
    default:
      console.log(`[DEF] ${ms?.message}`);
      break;
  }
  return true;
}

function wrap<ArgsType, ReturnType>(func: FuncConfig<ArgsType, ReturnType>) {
  return (args?: ArgsType): ReturnType | undefined => {
    try {
      return func(args);
    } catch (e) {
      if (e instanceof Error)
        message({
          mode: 'dev',
          type: 'FAIL',
          message: e.message,
        });
    }
    return;
  };
}

function asyncWrap<ArgsType, ReturnType>(
  func: FuncConfig<ArgsType, ReturnType>
) {
  return async (args?: ArgsType): Promise<ReturnType | undefined> => {
    try {
      return await func(args);
    } catch (e) {
      if (e instanceof Error)
        message({
          mode: 'dev',
          type: 'FAIL',
          message: e.message,
        });
    }
    return;
  };
}

const Err = {
  asyncWrap,
  wrap,
  message,
};

export { Err };
