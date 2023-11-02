import Header from 'components/Header';
import React, { useState } from 'react';
import styles from './Cart.module.scss';
import Item from 'components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, selectCartAndTotal } from 'store/reducers/cart';
import { Button, Spinner } from 'reactstrap';
import emptyCart from '../../assets/empty-cart.png';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, total } = useSelector(selectCartAndTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleFinishClick = () => {
    dispatch(resetCart());
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <Header />

      <div className={cart.length > 0 ? styles.cart : ''}>
        {cart.map((item) => (
          <Item key={item.id} {...item} cart />
        ))}
        {cart.length > 0 ? (
          <>
            <div
              className={`${styles.total} text-white bg-transparent position-relative`}
            >
              <strong>Resumo da compra</strong>
              <span>
                Subtotal: <strong> R$ {total.toFixed(2)} </strong>
              </span>
              <div
                className="dropdown-divider text-white position-absolute bottom-0"
                style={{
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#F2f2f2',
                }}
              >
                {' '}
              </div>
            </div>
            <div>
              <Button
                onClick={handleFinishClick}
                color="light"
                className="fw-medium rounded-pill"
                style={{ width: '250px', height: '44px' }}
              >
                Finalizar compra
              </Button>
            </div>
          </>
        ) : (
          <div className="pt-5 bg-salmon d-flex align-items-center justify-content-center gap-5 flex-column">
            <img
              className="pe-5"
              src={emptyCart}
              style={{ filter: 'invert(100%)' }}
            />
            <h4 className="text-white">
              Carrinho vazio, adicione items para sigar para o checkout
            </h4>
            <Button
              size="lg"
              outline
              color="light"
              className="fw-medium"
              onClick={() => navigate('/')}
            >
              Continue comprando
            </Button>
          </div>
        )}
      </div>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999',
          }}
        >
          <Spinner
            color="secondary"
            size="lg"
            type="grow"
            style={{ marginRight: '8px', opacity: '0' }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="secondary"
            size="lg"
            type="grow"
            style={{ marginRight: '8px', opacity: '0.33' }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="secondary"
            size="lg"
            type="grow"
            style={{ opacity: '0.66' }}
          >
            Loading...
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default Cart;
