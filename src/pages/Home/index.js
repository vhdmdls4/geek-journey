import Header from 'components/Header';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header className={styles.header} />
      <main>
        <div className={styles.categories}>
          <div className={styles['categories-title']}>
            <h1>Categorias</h1>
          </div>
          <div className={styles['categories-container']}>
            {categories.map((category, index) => {
              <div
                key={index}
                onClick={() => navigate(`/categoria/${category.id}`)}
              >
                <img src={category.thumbnail} alt={category.name} />
                <h1>{category.name}</h1>
              </div>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
