import { FC } from 'react';

type Props = {
  children: JSX.Element;
};

const Container: FC<Props> = ({ children }) => (
  <div style={{ margin: '16px 16px 90px 16px' }}>
    {children}
  </div>
);

export default Container;
