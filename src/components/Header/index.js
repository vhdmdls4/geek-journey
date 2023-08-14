import styles from './Header.module.scss';

export default function Header({ className = '' }) {
  return (
    <div className={styles.background}>
      <header className={`${styles.header} ${className}`}>
        <div className={styles['header-texto']}></div>
      </header>
    </div>
  );
}
