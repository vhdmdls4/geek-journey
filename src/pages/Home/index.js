import Header from 'components/Header';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <Header
        title="Geek Journey"
        description="Transforme Sua Paixão em Coleções Reais"
        className={styles.header}
      />
    </div>
  );
}
