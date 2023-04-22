import styles from './Button.module.css';

export default function Button({link, text, eventClick}) {
    return (
        <a href={link}>
            <button type="button" className={styles.button} onClick={eventClick}>{text}</button>
        </a>
    )
}