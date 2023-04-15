import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy_right}>
                <span>Linked List</span> &copy; 2023
            </p>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
        </footer>
    )
}