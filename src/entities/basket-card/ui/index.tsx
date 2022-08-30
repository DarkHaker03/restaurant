import { FC } from 'react';
import { Counter } from 'shared/ui/counter';
import { mainModel } from 'pages/main';
import { selectedFoodModel } from 'process/selected-food';
// import tableImg from 'shared/assets/img/stol.png';
import styles from './styles.module.scss';

type Props = {
  item: mainModel.ExpantionOfProductsKeys,
}

const BasketCard: FC<Props> = ({ item }) => {
  const { setCounter, deteleItemInSelectedMenu } = selectedFoodModel;
  const { id, counter } = item;
  const counterProps = {
    lefBtn: () => {
      if (counter !== 1) {
        setCounter({ id, counter: counter - 1 });
      } else {
        deteleItemInSelectedMenu(item.id);
      }
    },
    rightBtn: () => {
      setCounter({ id, counter: counter + 1 });
    },
  };
  return (
    <div className={styles['item-of-backet']}>
      <img src={item.image} alt="" className={styles.img} />
      <div className={styles.container}>
        <div className={styles['top-row']}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{`${item.price * item.counter} ₽`}</span>
        </div>
        <Counter
          leftBtn={() => counterProps.lefBtn()}
          counter={counter}
          rightBtn={() => counterProps.rightBtn()}
          supplementStyles={{ justifyContent: 'start', padding: '0' }}
          supplementStylesOfCounter={{ margin: '0 14px' }}
        />
      </div>
    </div>
  );
};

export default BasketCard;
