import Header from 'components/Header';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BaseCarousel from 'components/common/BaseCarousel';

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <Header className={styles.header} />
      <main>
        <div className="mb-5">
          <BaseCarousel
            indicators={false}
            fade={true}
            items={categories}
            caption={true}
          />
        </div>
        <div className={styles.categories}>
          <div className={styles['categories-title']}>
            <h2>Categorias</h2>
          </div>
          <div className={styles['categories-container']}>
            {categories?.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate(`/categoria/${category.id}`)}
              >
                <img src={category.thumbnail} alt={category.name} />
                <h2>{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
