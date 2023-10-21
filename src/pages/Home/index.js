import Header from 'components/Header';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BaseCarousel from 'components/common/BaseCarousel';

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  console.log(categories);

  return (
    <div>
      <Header className={styles.header} />
      <main>
        <div>
          <BaseCarousel items={categories} />
        </div>
        <div className={styles.categories}>
          <div className={styles['categories-title']}>
            <h1>Categorias</h1>
          </div>
          <div className={styles['categories-container']}></div>
          {console.log(categories)}
        </div>
      </main>
    </div>
  );
}
