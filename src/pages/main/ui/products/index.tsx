import { CardFood } from 'entities/card-food';
import { useUnit } from 'effector-react';
import { mainModel } from 'pages/main';
import styles from './styles.module.scss';

const Products = () => {
  const menu = useUnit(mainModel.$menu);
  return (
    <>
      { menu.map((item) => (
        <div id={item.name} style={{ scrollMarginTop: '60px' }}>
          <div className={styles.name}>{item.name}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {item.products.map((product) => <CardFood {...product} key={product.id} />)}
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
