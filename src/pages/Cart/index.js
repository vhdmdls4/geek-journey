import Header from 'components/Header';
import React from 'react';
import styles from './Cart.module.scss';
import Item from 'components/Item';
import { useSelector } from 'react-redux';

function Cart() {
  const { cart, total } = useSelector((state) => {
    let total = 0;
    const cartReduce = state.cart.reduce((items, itemInCart) => {
      const item = state.itens.find((item) => item.id === itemInCart.id);
      total += item.price * itemInCart.quantity;
      items.push({
        ...item,
        quantity: itemInCart.quantidade,
      });
      return items;
    }, []);
    return {
      cart: cartReduce,
      total,
    };
  });

  return (
    <div>
      <Header />
      <div className={styles.cart}>
        {cart.map((item) => (
          <Item key={item.id} {...item} cart />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
