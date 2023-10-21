import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../Busca';
import image from '../../assets/logo-geek-white2.png';
import { useEffect, useState } from 'react';

const iconeProps = {
  color: 'white',
  size: 24,
};

export default function Navbar() {
  const [isTabletView, setisTabletView] = useState(window.innerWidth < 1024);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    function handleResize() {
      setisTabletView(window.innerWidth < 1024);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHamburguerClick = () => {
    setClicked(true);
  };

  const handleCloseHamburguer = () => {
    setClicked(false);
  };

  return (
    <nav className={styles.nav}>
      {isTabletView && (
        <div className={styles.hamburguer} onClick={handleHamburguerClick}>
          <span className="text-white">&#9776;</span>
        </div>
      )}
      <ul
        className={classNames(
          styles.links,
          { [styles.sidenav]: isTabletView },
          { [styles.active]: clicked }
        )}
      >
        {isTabletView && (
          <a onClick={handleCloseHamburguer} className={styles.closebtn}>
            &times;
          </a>
        )}
        <li>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            PÁGINA INICIAL
          </a>
        </li>
        <li>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            PRODUTOS
          </a>
        </li>
        <li>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            SOBRE
          </a>
        </li>
      </ul>
      <img src={image} className={styles.logo} />
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
