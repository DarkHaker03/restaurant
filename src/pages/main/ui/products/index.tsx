import { CardFood } from 'entities/card-food';
import { menuApi } from 'shared/api/menu';
import { useUnit } from 'effector-react';
import styles from './styles.module.scss';

const Products = () => {
  const menu = useUnit(menuApi.$menu);
  return (
    <>
      { menu.map((item) => (
        <div>
          <div className={styles.name} id={item.name}>{item.name}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {item.products.map((product) => <CardFood {...product} key={product.id} />)}
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
