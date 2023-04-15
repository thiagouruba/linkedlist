import styles from './Input.module.css'

export default function Input({ type, placeholder, name}) {
    return (
        <>
            <input className={styles.input} type={type} placeholder={placeholder} name={name} id={name} />
        </>
    )
}