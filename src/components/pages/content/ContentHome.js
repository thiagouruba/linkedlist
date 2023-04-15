import styles from './ContentHome.module.css';

export default function ContentHome(props) {
    return (
        <div className={styles.div}>
            <ul className={`${styles.list} ${styles[props.customClass]}`} >
                <ul className={styles.list_description}>
                    <li>{props.description}</li>
                    <li>{props.button}</li>
                </ul>
                <li><img src={props.img} alt={props.alt} className={styles.img}></img></li>
            </ul>
        </div>
    )
}