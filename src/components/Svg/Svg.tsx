import { FC, SVGAttributes } from 'react';

interface SvgProps extends React.SVGAttributes<SVGElement> {
  as: FC<SVGAttributes<SVGElement>>;
}

export const Svg: FC<SvgProps> = ({ as = () => null, ...rest }) =>
  as({ ...rest });
