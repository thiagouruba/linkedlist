import styles from './SubmitButton.module.css';

export default function SubmitButton({ text, type }) {
    return (
        <button className={styles.btn} type={type} >{text}</button>
    )
}