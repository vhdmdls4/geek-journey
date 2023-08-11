import styles from './Header.module.scss';

export default function Header({ title, description, className = '' }) {
  return (
    <div className={styles.background}>
      <header className={`${styles.header} ${className}`}>
        <div className={styles['header-texto']}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </header>
    </div>
  );
}
