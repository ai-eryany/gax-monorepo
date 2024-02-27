import clx from '../../functions/clx';
import { Props } from '../../types/utils';

export default function InputPrimary(props: Props<'input', object>) {
  const { className, type } = props;
  return <input {...props} type={type} className={clx(className)} />;
}
