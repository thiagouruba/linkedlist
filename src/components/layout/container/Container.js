import styles from './Container.module.css'

export default function Container(props) {
    return <div className={styles.div}>{props.children}</div>
}