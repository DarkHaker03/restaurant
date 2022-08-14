import { useUnit } from 'effector-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { lowerBarModel } from '..';
import styles from './styles.module.scss';

const LowerBar: FC = () => {
  const { $text, $link, $isOpen } = lowerBarModel;
  const [text, link, isOpen] = useUnit([$text, $link, $isOpen]);
  if (isOpen) {
    return (
      <div className={styles.lowerBar}>
        <Link className={styles.btn} to={link}>
          {text}
        </Link>
      </div>
    );
  }
  return <span />;
};

export default LowerBar;
