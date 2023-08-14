import Header from 'components/Header';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <Header className={styles.header} />
      <main>TEstando aqui</main>
    </div>
  );
}
