import { FC, useState } from 'react';
import { useLowerbar } from 'shared/hooks';
import { INGREDIEENTS } from 'shared/api/ingridients/model';
import ActiveItem from './active-item';
import styles from './styles.module.scss';

const FoodDetailSupplement: FC = () => {
  const [active, setActive] = useState(INGREDIEENTS[0]);
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const link: string = '/food-detail';
  const text: string = 'Готово';
  useLowerbar.withoutWacth(link, text);

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
          <ActiveItem
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
