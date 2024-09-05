// Packages
import { Link, LinkProps } from 'react-router-dom';

// Utils
import { cntl, clx } from '@gax/utils';

// Types
import { Maybe, Props } from '@gax/types';

type P = {
  isActive?: Maybe<boolean>;
};

const styleMain = cntl`
  block
  cursor-pointer 
  text-[15px] 
  font-bold
`;

const fontColor = cntl`
  text-gray-500 
`;

const activeFontColor = cntl`
  text-[#007bff]
`;

const hoverStyle = cntl`
  hover:text-[#007bff] 
`;

function PrimaryLink(props: Props<'a', LinkProps & P>) {
  return (
    <li className={clx('max-lg:border-b max-lg:py-3')}>
      <Link
        {...props}
        className={clx(
          styleMain,
          props.isActive ? activeFontColor : fontColor,
          hoverStyle,
          props.className
        )}
      >
        {props.children}
      </Link>
    </li>
  );
}

export { PrimaryLink };
