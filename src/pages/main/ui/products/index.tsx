import { CardFood } from 'entities/card-food';
import { menuModel } from 'entities/menu';
import { useUnit } from 'effector-react';

const Products = () => {
  const { products } = useUnit(menuModel.$selectedItem);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      { products.map((item) => <CardFood {...item} key={item.id} />)}
    </div>
  );
};

export default Products;
