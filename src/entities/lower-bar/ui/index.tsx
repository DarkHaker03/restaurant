import { useUnit } from 'effector-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { lowerBarModel } from '..';
import styles from './styles.module.scss';

const LowerBar: FC = () => {
  const { $text, $link } = lowerBarModel;
  const [text, link] = useUnit([$text, $link]);
  return (
    <div className={styles.lowerBar}>
      <Link className={styles.btn} to={link}>
        {text}
      </Link>
    </div>
  );
};

export default LowerBar;
