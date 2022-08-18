import { useUnit } from 'effector-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { lowerBarModel } from '..';
import styles from './styles.module.scss';

const LowerBar: FC = () => {
  const {
    $text, $link, $isOpen, clicked,
  } = lowerBarModel;
  const [text, link, isOpen] = useUnit([$text, $link, $isOpen]);
  if (isOpen) {
    return (
      <div className={styles['lower-bar']}>
        <Link className={styles.btn} to={link} onClick={() => clicked()}>
          {text}
        </Link>
        <span className={styles['lower-bar-line']} />
      </div>
    );
  }
  return <span />;
};

export default LowerBar;
