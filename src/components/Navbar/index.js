import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../Busca';
import image from '../../assets/logo-geek-white2.png';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const iconeProps = {
  color: 'white',
  size: 24,
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
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
          <NavLink
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === '/',
            })}
          >
            PÁGINA INICIAL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname.includes('/sobre'),
            })}
          >
            SOBRE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/parceiros-geek"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname.includes('/parceiros-geek'),
            })}
          >
            PARCEIROS GEEK
          </NavLink>
        </li>
      </ul>
      <img src={image} className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <NavLink to="/carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </NavLink>
      </div>
    </nav>
  );
}
