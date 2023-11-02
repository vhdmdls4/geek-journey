import { useDispatch, useSelector } from 'react-redux';
import styles from './Busca.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { changeSearch, resetSearch } from 'store/reducers/search';
import items from 'store/reducers/items';

export default function Busca() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetSearch());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={search}
        onChange={(event) => dispatch(changeSearch(event.target.value))}
      />
      <div className={styles.buscaIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
}
