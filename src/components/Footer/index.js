import styles from './Footer.module.scss';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconeProps = {
  color: 'white',
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© Desenvolvido por Victor Hugo com apoio da Alura.</span>
        <div className={styles.iconsContainer}>
          <span>
            <FaFacebook {...iconeProps} />
          </span>
          <span>
            <FaInstagram {...iconeProps} />
          </span>
          <span>
            <FaTwitter {...iconeProps} />
          </span>
        </div>
      </div>
    </footer>
  );
}
