// functions
import { clx } from '@panda/core';
// components
import { FlexCol } from '@panda/core';

export default function UnderConstruction() {
  return (
    <FlexCol className={clx('items-center', '')}>
      <div className={clx('constructions')}></div>
      <h1 className={clx('font-bold text-slate-700 text-4xl')}>
        Page is under construction
      </h1>
    </FlexCol>
  );
}
