import React from 'react';
import styles from './Item.module.scss';
import { FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeFavorite } from 'store/reducers/items';

const iconProps = {
  size: 24,
  color: '#041833',
};

function Item(props) {
  const { title, description, image, favorite, price, id, category } = props;

  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  return (
    <div className={styles.item}>
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
            <FaCartPlus
              {...iconProps}
              color={false ? '#1875e2' : iconProps.color}
              className={styles['item-action']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
