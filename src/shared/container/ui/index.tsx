import { FC } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children: JSX.Element;
};

const Container: FC<Props> = ({ children }) => {
  const location = useLocation().pathname;
  return (
    <div style={location !== '/basket' ? { margin: '16px 16px 120px 16px' } : {}}>
      {children}
    </div>
  );
};

export default Container;
