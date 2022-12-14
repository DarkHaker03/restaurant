import { FC, useEffect, useState } from 'react';
import { lowerBarModel } from 'entities/lower-bar';
import { INGREDIEENTS } from 'pages/food-detail';
import styles from './styles.module.scss';
import ActiveItems from './active-items';

const FoodDetailSupplement: FC = () => {
  const { setLink, setText, setIsOpen } = lowerBarModel;
  const [active, setActive] = useState(INGREDIEENTS[0]);
  const [activeItems, setActiveItems] = useState<string[]>([]);
  useEffect(() => {
    setIsOpen(true);
    setLink('/food-detail');
    setText('Готово');
  }, []);
  return (
    <>
      <div className={styles['scroll-bar']}>
        {INGREDIEENTS.map((item) => (
          <span
            className={styles['scroll-bar-item']}
            onClick={() => setActive(item)}
            key={item.type}
          >
            {item.type}
            {active.type === item.type && <span className={styles.active} />}
          </span>
        ))}
      </div>
      <div>
        {active.items.map((item) => (
          <ActiveItems
            key={item.name}
            item={item}
            active={active}
            activeItems={activeItems}
            setActiveItems={setActiveItems}
          />
        ))}
      </div>
    </>
  );
};

export default FoodDetailSupplement;
