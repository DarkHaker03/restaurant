import { FC } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children: JSX.Element;
};

const PAGES_WITHOUT_CONTIANER: string[] = [
  '/basket',
  '/food-detail-supplement',
];

const Container: FC<Props> = ({ children }) => {
  const currentPage = useLocation().pathname;
  const isConfirm = PAGES_WITHOUT_CONTIANER.some((page) => page === currentPage);
  console.log(isConfirm);
  return (
    <div style={isConfirm ? {} : { margin: '16px 16px 120px 16px' }}>
      {children}
    </div>
  );
};

export default Container;
