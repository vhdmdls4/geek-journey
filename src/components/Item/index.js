import React from 'react';
import styles from './Item.module.scss';
import {
  FaCartPlus,
  FaHeart,
  FaMinusCircle,
  FaPlusCircle,
  FaRegHeart,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavorite } from 'store/reducers/items';
import { changeCart, changeQuantity } from 'store/reducers/cart';
import classNames from 'classnames';

const iconProps = {
  size: 24,
  color: '#041833',
};

const quantityProps = {
  size: 32,
  color: '#1875E8',
};

function Item(props) {
  const { title, description, image, favorite, price, id, cart, quantity } =
    props;

  const dispatch = useDispatch();

  const existInCart = useSelector((state) =>
    state.cart.some((itemInCart) => itemInCart.id === id)
  );

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  function handleCartChange() {
    dispatch(changeCart(id));
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemInCart]: cart,
      })}
    >
      <div className={styles['item-image']}>
        <img src={image} alt={title} />
      </div>
      <div className={styles['item-description']}>
        <div className={styles['item-title']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-price']}>R$ {price.toFixed(2)}</div>
          <div className={styles['item-actions']}>
            {favorite ? (
              <FaHeart
                {...iconProps}
                className={styles['item-action']}
                onClick={handleFavorite}
              />
            ) : (
              <FaRegHeart
                className={styles['item-action']}
                {...iconProps}
                onClick={handleFavorite}
              />
            )}
            {cart ? (
              <div className={styles.quantity}>
                Quantidade:
                <FaMinusCircle
                  {...quantityProps}
                  onClick={() => {
                    if (quantity >= 1) {
                      dispatch(changeQuantity({ id, quantity: -1 }));
                    }
                  }}
                />
                <span>{String(quantity || 0).padStart(2, '0')}</span>
                <FaPlusCircle
                  {...quantityProps}
                  onClick={() => dispatch(changeQuantity({ id, quantity: +1 }))}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={existInCart ? '#1875E8' : iconProps.color}
                className={styles['item-action']}
                onClick={handleCartChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
