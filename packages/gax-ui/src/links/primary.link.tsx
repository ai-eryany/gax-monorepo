// Packages
import { Link, LinkProps } from 'react-router-dom';

// Utils
import { cntl, clx } from '@gax/utils';

// Types
import { Maybe, Props } from '@gax/types';

type P = {
  isActive?: Maybe<boolean>;
};

const modelStyle = cntl`
  relative
  cursor-pointer
  text-[15px]
  font-bold
`;

const fontStyle = cntl`
  text-gray-500 
`;

const activeFontStyle = cntl`
  text-[#007bff]
`;

const hoverStyle = cntl`
  hover:text-[#007bff]
`;

function PrimaryLink(props: Props<'a', LinkProps & P>) {
  return (
    <Link
      {...props}
      className={clx(
        modelStyle,
        props.isActive ? activeFontStyle : fontStyle,
        hoverStyle,
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}

export { PrimaryLink };
