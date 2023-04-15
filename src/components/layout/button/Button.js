import styles from './Button.module.css';

export default function Button({link, text}) {
    return (
        <a href={link}>
            <button type="button" className={styles.button}>{text}</button>
        </a>
    )
}