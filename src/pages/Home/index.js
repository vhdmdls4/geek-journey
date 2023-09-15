import Header from 'components/Header';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import categories from 'data/constants';
import { useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  console.log(categories);

  return (
    <div>
      <Header className={styles.header} />
      <main>
        <div className={styles.categories}>
          <div className={styles['categories-title']}>
            <h1>Categorias</h1>
          </div>
          <div className={styles['categories-container']}>
            {console.log(categories[0].thumbnail)}
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate(`/categoria/${category.id}`)}
              >
                {console.log(index)}
                <img
                  src={category.thumbnail}
                  alt={category.name}
                  className={styles['categories-thumbnail']}
                />
                <h1>{category.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
